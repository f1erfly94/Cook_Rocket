import {NextRequest, NextResponse} from 'next/server';
import {PrismaClient} from '@prisma/client';

const prisma = new PrismaClient();

// Обробка GET-запитів
export async function GET(req: NextRequest) {
    try {
        const categories = await prisma.category.findMany();
        return NextResponse.json(categories, { status: 200 });
    } catch (error) {
        console.error('Error fetching categories:', error);
        return NextResponse.json({ error: 'Failed to fetch categories' }, { status: 500 });
    }
}

// Обробка POST-запитів
export async function POST(req: NextRequest) {
    try {
        const body = await req.json();
        const { name } = body;

        if (!name) {
            return NextResponse.json({ error: 'Name is required' }, { status: 400 });
        }

        const newCategory = await prisma.category.create({
            data: { name },
        });

        return NextResponse.json(newCategory, { status: 201 });
    } catch (error) {
        console.error('Error creating category:', error);
        return NextResponse.json({ error: 'Failed to create category' }, { status: 500 });
    }
}
