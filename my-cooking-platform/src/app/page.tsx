import React from 'react';
import {Container} from "@/components/shared/container";
import {cn} from "@/lib/utils";
import {Button} from "@/components/ui";

interface Props {
    className?: string;
}

const Page: React.FC<Props> = ({className}) => {


    return (
        <>
            <Container className={cn('flex items-center justify-between py-8', className)}>
                <Button onClick={(() => console.log('тест'))}> тест</Button>
                <div>головна сторінка</div>
            </Container>
        </>
    );
};

export default Page;