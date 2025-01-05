import React from 'react';
import {Container} from "@/components/shared/container";
import {cn} from "@/lib/utils";
import Image from 'next/image';
import Link from "next/link";
import {
    Menubar,
    MenubarContent,
    MenubarItem,
    MenubarMenu,
    MenubarSeparator,
    MenubarShortcut,
    MenubarTrigger
} from "@/components/ui/menubar";
import Modal from "@/components/ui/modal";
import ModalLogin from "@/components/ui/modalLogin";

interface Props {
    className?: string;
}

const Header: React.FC<Props> = ({className}) => {
    return (
        <header className={cn('border border-b', className)}>
            <Container className={cn('flex items-center justify-between py-8', className)}>
                <div className="flex items-center gap-4">
                    <Link href="/">
                        <Image src="/logo.svg" alt="logo" width={100} height={100}/>
                    </Link>
                    <div>
                        <h1 className="text-2xl uppercase font-black">Укусні Вкусняшки</h1>
                        <p className="text-sm text-gray-400 leading-3">Таких ти ще не їв</p>
                    </div>
                </div>
                <div className="flex items-center gap-3">
                    <Menubar>
                        <MenubarMenu>
                            <MenubarTrigger>Меню</MenubarTrigger>
                            <MenubarContent>
                                <MenubarItem>
                                    1таба <MenubarShortcut>пес патрон</MenubarShortcut>
                                </MenubarItem>
                                <MenubarItem> 2аба</MenubarItem>
                                <MenubarSeparator/>
                                <MenubarItem> 3таба</MenubarItem>
                                <MenubarSeparator/>
                                <MenubarItem> 4аба</MenubarItem>
                            </MenubarContent>
                        </MenubarMenu>
                    </Menubar>
                    <Menubar>
                        <MenubarMenu>
                            <MenubarTrigger>Меню</MenubarTrigger>
                            <MenubarContent>
                                <MenubarItem>
                                    1таба <MenubarShortcut>пес патрон</MenubarShortcut>K
                                </MenubarItem>
                                <MenubarItem> 2аба</MenubarItem>
                                <MenubarSeparator/>
                                <MenubarItem> 3таба</MenubarItem>
                                <MenubarSeparator/>
                                <MenubarItem> 4аба</MenubarItem>
                            </MenubarContent>
                        </MenubarMenu>
                    </Menubar>
                    <Menubar>
                        <MenubarMenu>
                            <MenubarTrigger>Меню</MenubarTrigger>
                            <MenubarContent>
                                <MenubarItem>
                                    1таба <MenubarShortcut>пес патрон</MenubarShortcut>
                                </MenubarItem>
                                <MenubarItem> 2аба</MenubarItem>
                                <MenubarSeparator/>
                                <MenubarItem> 3таба</MenubarItem>
                                <MenubarSeparator/>
                                <MenubarItem> 4аба</MenubarItem>
                            </MenubarContent>
                        </MenubarMenu>
                    </Menubar>

                    <ModalLogin/>
                    <Modal/>
                </div>
            </Container>
        </header>
    );
};

export default Header;
