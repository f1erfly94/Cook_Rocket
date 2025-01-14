import {NextRequest, NextResponse} from 'next/server';
import {PrismaClient} from '@prisma/client';

const prisma = new PrismaClient();

export async function GET(req: NextRequest) {
    try {
        const { searchParams } = new URL(req.url);
        const page = parseInt(searchParams.get('page') || '1');
        const limit = parseInt(searchParams.get('limit') || '10');
        const skip = (page - 1) * limit;

        const [recipes, totalCount] = await prisma.$transaction([
            prisma.recipe.findMany({
                skip,
                take: limit,
                include: {
                    additionalImages: true,
                    category: true,
                    author: {
                        select: {
                            id: true,
                            fullName: true,
                            avatarUrl: true,
                        },
                    },
                },
            }),
            prisma.recipe.count(),
        ]);

        return NextResponse.json({ recipes, totalCount, page, limit }, { status: 200 });
    } catch (error) {
        console.error('Error fetching recipes:', error);
        return NextResponse.json({ error: 'Failed to fetch recipes' }, { status: 500 });
    }
}

export async function POST(req: NextRequest) {
    try {
        const body = await req.json();
        const {
            name,
            description = '',
            ingredients = '',
            steps = '',
            prepTime = '0',
            cookTime = '0',
            totalTime = '0',
            servings = 1,
            categoryId,
            image = '',
            additionalImages = [],
            extraResources = '',
            authorId,
        } = body;

        if (!name || !categoryId || !authorId) {
            return NextResponse.json({error: 'Name, categoryId, and authorId are required'}, {status: 400});
        }

        const categoryExists = await prisma.category.findUnique({where: {id: categoryId}});
        const authorExists = await prisma.user.findUnique({where: {id: authorId}});

        if (!categoryExists || !authorExists) {
            return NextResponse.json({error: 'Invalid categoryId or authorId'}, {status: 400});
        }

        const newRecipe = await prisma.recipe.create({
            data: {
                name,
                description,
                ingredients,
                steps,
                prepTime,
                cookTime,
                totalTime,
                servings,
                categoryId,
                image,
                additionalImages: additionalImages.length
                    ? {
                        create: additionalImages.map((url: string) => ({url})),
                    }
                    : undefined,
                authorId,
                extraResources,
                favorite: false,
            },
        });

        return NextResponse.json(newRecipe, {status: 201});
    } catch (error) {
        console.error('Error:', (error as Error).message);
        return NextResponse.json({error: 'Something went wrong'}, {status: 500});
    }
}
