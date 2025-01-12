import React from 'react';
import {Container} from "@/components/shared/container";
import {cn} from "@/lib/utils";
import RecipeForm from "@/components/shared/components/recipeForm";

interface Props {
    className?: string;
}

const Page: React.FC<Props> = ({className}) => {
    return (
        <Container className={cn(' py-8', className)}>
            <div className="min-h-screen ">
                <h1 className="flex justify-center text-3xl font-bold text-center mb-6 ">Додавання рецепту</h1>
                <RecipeForm/>
            </div>
        </Container>
    );
};

export default Page;