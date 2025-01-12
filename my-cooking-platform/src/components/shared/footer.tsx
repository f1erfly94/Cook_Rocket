"use client";
import React from 'react';
import {cn} from "@/lib/utils";
import {Container} from "@/components/shared/container";
import {Cat} from "lucide-react";

interface Props {
    className?: string;
}

const Footer: React.FC<Props> = ({className}) => {
    return (
        <Container>


            <div className={cn('flex justify-center my-10', className)}>
                <Cat size={24} className="mx-2 " />
                Зроблено котиками мурчиками в 2025 році!
                <Cat size={24} className="mx-2" />
            </div>

        </Container>
);
};

export default Footer;