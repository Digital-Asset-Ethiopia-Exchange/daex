import type { NextApiRequest, NextApiResponse } from 'next'
import { prisma } from '../../../lib/prisma';
import bcrypt from 'bcrypt';
import { createAccount, CreateAccount, Currency, Fiat } from "@tatumio/tatum";
import jwt from "jsonwebtoken";
import { config } from "dotenv";

config();

const secret = "test";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { email, phoneNumber, roles, password, referredById, country } = req.body;

  const referralId = Math.random().toString(36).slice(-6).toUpperCase();

  // TODO: Check if user exists already
  let user = await prisma.user.findFirst({
    where: { email }
  });

  if (user)
    res.status(400).json({
      status: 400,
      message: "User already exists"
    });

  // TODO: Encrypt User Password
  const hashedPassword = bcrypt.hashSync(password, 10);

  // TODO: Create User instance in db using prisma Client
  try {
    user = await prisma.user.create({
      data: { email, phoneNumber, roles, hashedPassword, referralId, referredById, country }
    });

    const payload: CreateAccount = {
      currency: Currency.BSC,
      accountingCurrency: Fiat.ETB,
      xpub: process.env.X_PUB,
      customer: {
        externalId: user.uid,
        accountingCurrency: Fiat.ETB,
        customerCountry: country,
      },
    };

    const account = await createAccount(payload);

    user = await prisma.user.update({
      where: {
        id: user.id
      },
      data: {
        tatumAccountId: account.id
      }
    })

    console.log(user);

    const token = jwt.sign({ email: user.email, id: user.id, uid: user.uid, tatumId: account.id }, process.env.SECRET as string, { expiresIn: 60 * 60 })
    res.status(201).json({ token });
  } catch (error: any) {
    if (error.meta.field_name === "User_referredById_fkey (index)")
      res.status(404).json({
        status: 404,
        message: "Referral Id doesn't exist"
      })
    res.status(500).json(error)
  }
}


