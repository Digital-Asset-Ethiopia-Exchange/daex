import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function seed() {
    const kody = await prisma.user.create({
        data: {
            name: "Yeabsra Hailu",
            // Hashed Password for 'admin'
            hashedPassword: "$2b$10$XNuYJ0IIwaVrDyKrIfT77.AyPniwLlBa9ZzbIgU6/.4A134KAiQ9m",
            referralId: "ABCDEQ",
            roles: ["ADMIN", "USER"],
            country: "ET",
            email: "sys.admin@daex.com",
            phoneNumber: "+251967303866",
        }
    });
}

seed()
    .catch((e) => {
        console.error(e)
        process.exit(1)
    })
    .finally(async () => {
        await prisma.$disconnect()
    })