import { PrismaClient } from '@prisma/client';
import { v4 as uuidv4 } from 'uuid';
const prisma = new PrismaClient();

async function main() {
    await Promise.all([
        prisma.user.create({
            data: {
                id: uuidv4(),
                email: 'vladimir@example.com',
                name: 'Vladimir',
            },
        }),
        prisma.user.create({
            data: {
                id: uuidv4(),
                email: 'ivan@example.com',
                name: 'Ivan',
            },
        }),
        await prisma.product.create({
            data: {
                id: uuidv4(),
                name: 'Bread',
                price: 100,
            },
        }),
        await prisma.product.create({
            data: {
                id: uuidv4(),
                name: 'Butter',
                price: 250,
            },
        }),
    ]);
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
