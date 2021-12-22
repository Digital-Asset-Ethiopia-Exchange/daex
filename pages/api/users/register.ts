// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { prisma } from '../../../lib/prisma';
import bcrypt from 'bcrypt';

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const { email, phoneNumber, password, referralId, country } = req.body;

    // TODO: Check if user exists already
    let user = await prisma.user.findFirst({
        where: { email }
    });
    console.log("User", user);

    if (user)
        res.status(400).json({ message: "User already exists" });

    console.log("User", user);
    // TODO: Encrypt User Password
    const hashedPassword = bcrypt.hashSync(password, 10);
    // TODO: Create User instance in db using prisma Client
    try {
        user = await prisma.user.create({
            data: {
                email,
                phoneNumber,
                hashedPassword,
                referredBy: referralId,
                country
            }
        });
    } catch (error: any) {
        res.status(500).json(error)
    }

    res.status(200).json(user);
}