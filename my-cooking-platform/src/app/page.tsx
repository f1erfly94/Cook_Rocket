import React from 'react';
import {Container} from "@/components/shared/container";
import {cn} from "@/lib/utils";

interface Props {
    className?: string;
}

const Page: React.FC<Props> = ({className}) => {


    return (
        <>
            <Container className={cn('flex items-center justify-between py-8', className)}>
            <div>тест</div>
            </Container>
        </>
    );
};

export default Page;