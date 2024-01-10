import { PrismaClient } from '@prisma/client';
import { v4 as uuidv4 } from 'uuid';
const prisma = new PrismaClient();

async function main() {
    await Promise.all([
        prisma.user.upsert({
            where: {
                email: 'vladimir@example.com',
            },
            update: {},
            create: {
                id: uuidv4(),
                email: 'vladimir@example.com',
                name: 'Vladimir',
            },
        }),
        prisma.user.upsert({
            where: {
                email: 'ivan@example.com',
            },
            update: {},
            create: {
                id: uuidv4(),
                email: 'ivan@example.com',
                name: 'Ivan',
            },
        }),
        await prisma.product.upsert({
            where: {
                id: 'd2f7d739-972b-4846-aa85-6dc7cb502891'
            },
            update: {},
            create: {
                id: 'd2f7d739-972b-4846-aa85-6dc7cb502891',
                name: 'Bread',
                price: 100,
            },
        }),
        await prisma.product.upsert({
            where: {
                id: '27427eb4-e637-4136-9f04-1186ca8790d9',
            },
            update: {},
            create: {
                id: '27427eb4-e637-4136-9f04-1186ca8790d9',
                name: 'Butter',
                price: 250,
            },
        }),
    ]);
}

main()
    .catch(() => {
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
