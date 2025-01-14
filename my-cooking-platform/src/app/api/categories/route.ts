// pages/api/categories/index.ts

import {Category, PrismaClient} from '@prisma/client';

const prisma = new PrismaClient();

export async function GET() {
    try {
        const categories: Category[] = await prisma.category.findMany();
        return new Response(JSON.stringify(categories), { status: 200 });
    } catch (error) {
        console.error('Error retrieving categories:', error);
        return new Response(
            JSON.stringify({ error: 'Error retrieving categories' }),
            { status: 500 }
        );
    }
}
