import type { NextApiRequest, NextApiResponse } from 'next'
import { prisma } from '../../../lib/prisma';
import bcrypt from 'bcrypt';
import jwt from "jsonwebtoken";
import nodemailer from 'nodemailer';
import axios from 'axios';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { email, phoneNumber, password, referredById, country } = req.body;
  const url = `${process.env.TATUM_API_URL as string}/v3/blockchain/token/deploy`;

  const referralId = Math.random().toString(36).slice(-6).toUpperCase();

  // TODO: Check if user exists already
  let user = await prisma.user.findFirst({
    where: { email }
  });

  if (user) {
    res.status(400).json({
      status: 400,
      message: "User already exists"
    });

    return;
  }

  // TODO: Encrypt User Password
  const hashedPassword = bcrypt.hashSync(password, 10);

  // TODO: Create User instance in db using prisma Client
  try {
    user = await prisma.user.create({
      data: { email, phoneNumber, roles: ["USER"], hashedPassword, referralId, referredById, country }
    });

    const payload = {
      "currency": "ETH",
      "xpub": process.env.X_PUB,
      "customer": {
        "accountingCurrency": "ETB",
        "customerCountry": country,
        "externalId": user.uid,
        "providerCountry": "ET"
      },
      "accountingCurrency": "ETB",
    };

    const { account }: any = await axios.post(url, payload, {
      headers: {
        'x-testnet-type': process.env.TESTNET_TYPE as string,
        'x-api-key': process.env.TATUM_API_KEY as string
      }
    })

    user = await prisma.user.update({
      where: {
        id: user.id
      },
      data: {
        tatumAccountId: account.id
      }
    })

    console.log(user);

    // await sendEmail(user.email, "adsfjasdj");

    const token = jwt.sign({ email: user.email, id: user.id, uid: user.uid, tatumId: account.id }, process.env.SECRET as string, { expiresIn: 60 * 60 })
    res.status(201).json({ token });
    return;

    res.redirect("/")
  } catch (error: any) {
    console.log(error);
    if (error?.meta?.field_name === "User_referredById_fkey (index)")
      res.status(404).json({
        status: 404,
        message: "Referral Id doesn't exist"
      })
    res.status(500).json(error);
    return;
  }
}

const sendEmail = (email: string, randomId: string) => {
  var Transport = nodemailer.createTransport({
    service: "Gmail",
    auth: {
      user: process.env.EMAIL,
      pass: process.env.EMAIL_PASSWORD
    }
  });

  var mailOptions;
  let sender = process.env.EMAIL_FROM
  mailOptions = {
    from: sender,
    to: email,
    subject: "DAEX Email Confirmation",
    html: `Press <a href=https://localhost:3000/api/verify/${randomId}>here</a> to verify your email. Thanks.`
  }

  Transport.sendMail(mailOptions, function (error, response) {
    if (error)
      console.log(error);
    else
      console.log("Email Sent", response);
  });
}


