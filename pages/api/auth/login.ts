import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../../lib/prisma";
import bcrypt from 'bcrypt';
import jwt from "jsonwebtoken";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {

    const { email, phoneNumber, password } = req.body;

    try {
        // Check if the user exists in the db
        const user = await prisma.user.findFirst({
            where: {
                OR: {
                    email,
                    phoneNumber
                }
            }
        })

        console.log(user);

        if (!user)
            res.status(404).json({
                status: 404,
                message: "User not found"
            })

        // TODO: compare password with hashedPasswrod

        const isPasswordCorrect = bcrypt.compareSync(password, user?.hashedPassword as string);

        if (!isPasswordCorrect)
            res.status(403).json({
                status: 403,
                message: "Invalid user password"
            })

        console.log(user);
        const token = jwt.sign({ email: user?.email, id: user?.id, uid: user?.uid, tatumId: user?.tatumAccountId }, process.env.SECRET as string, { expiresIn: 8 * 60 * 60 })

        res.status(200).json({ token })
    } catch (error) {
        res.status(500).json({ error })
    }
}