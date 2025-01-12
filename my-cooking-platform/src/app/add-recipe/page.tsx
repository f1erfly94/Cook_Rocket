import React from 'react';
import {Container} from "@/components/shared/container";
import {cn} from "@/lib/utils";
import Header from "@/components/shared/header";

interface Props {
    className?: string;
}

const AddRecipe: React.FC<Props> = ({className}) => {
    return (
        <Container className={cn('flex items-center justify-between py-8', className)}>
            <Header/>
            <div>сторінка з рецептами
            </div>
        </Container>
    );
};

export default AddRecipe;