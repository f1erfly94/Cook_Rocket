// src/app/api/recipes/route.ts

import {PrismaClient} from '@prisma/client';

const prisma = new PrismaClient();

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { name, description, ingredients, steps, prepTime, cookTime, totalTime, servings, categoryId, authorId, image, extraResources } = body;

        // Перевірка, чи існує користувач
        const userExists = await prisma.user.findUnique({
            where: { id: authorId },
        });

        if (!userExists) {
            return new Response(
                JSON.stringify({ error: 'User not found' }),
                { status: 400 }
            );
        }

        // Перевірка наявності обов'язкових полів
        if (!name || !description || !ingredients || !steps || !categoryId || !authorId || servings === undefined) {
            return new Response(
                JSON.stringify({ error: 'Missing required fields' }),
                { status: 400 }
            );
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
                authorId,
                image,
                extraResources,
            },
        });

        return new Response(JSON.stringify(newRecipe), { status: 201 });
    } catch (error: any) {
        console.error('Error creating recipe:', error);
        return new Response(
            JSON.stringify({ error: 'Error creating recipe', details: error.message }),
            { status: 500 }
        );
    }
}
