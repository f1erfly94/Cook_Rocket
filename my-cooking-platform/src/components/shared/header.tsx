import React from 'react';
import {Container} from "@/components/shared/container";
import {cn} from "@/lib/utils";
import Image from 'next/image';


interface Props {
    className?: string;
}

const Header: React.FC<Props> = ({className}) => {
    return (
        <header className={cn('border border-b',className)}>
            <Container className="flex items-center justify-between  py-8 ">

                <div className="flex items-center gap4">
                    <Image src="/logo.png" alt="logo" width={100} height={100} />

                    <div>
                        <h1 className="text-2xl uppercase font-black">Укусні Вкусняшки</h1>
                        <p className="text-sm text-gray-400 leading-3">Таких ти ще не їв</p>

                    </div>
                </div>
            </Container>

        </header>
    );
};

export default Header;