import type { NextApiRequest, NextApiResponse } from 'next'
import { prisma } from '../../../lib/prisma';
import bcrypt from 'bcrypt';
// import { createAccount, Currency, Fiat } from '@tatumio/tatum';

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const { email, phoneNumber, password, referredById, country } = req.body;

    const referralId = Math.random().toString(36).slice(-6).toUpperCase();

    // TODO: Check if user exists already
    let user = await prisma.user.findFirst({
        where: { email }
    });

    if (user)
        res.status(400).json({ message: "User already exists" });

    // TODO: Encrypt User Password
    const hashedPassword = bcrypt.hashSync(password, 10);

    // TODO: Create User instance in db using prisma Client
    try {
        user = await prisma.user.create({
            data: { email, phoneNumber, hashedPassword, referralId, referredById, country }
        });

        // const account = await createAccount({
        //     currency: Currency.BUSD_BSC,
        //     accountingCurrency: Fiat.ETB,
        //     xpub: 'xpub6F7rdGfKzMtdeQqdfiRwx855bFhHXwyJ6eKC2dioWdYYoRZZva6eEmRn3aQEjswdZ8NwayjvJbTxvawE378MntgHWM85FUPDi91AXUuwMQF',
        //     customer: {
        //         externalId: user.id,
        //         accountingCurrency: Fiat.ETB,
        //         customerCountry: country
        //     }
        // });

        // console.log(account);
    } catch (error: any) {
        res.status(500).json(error)
    }

    res.status(200).json(user);
}