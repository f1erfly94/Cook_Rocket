"use client";
import React from 'react';
import {cn} from "@/lib/utils";
import {Container} from "@/components/shared/container";

interface Props {
    className?: string;
}

const Footer: React.FC<Props> = ({className}) => {
    return (
        <Container>
        <div className={cn('flex justify-center', className)}>
                зроблено котиками мурчиками
        </div>
        </Container>
);
};

export default Footer;