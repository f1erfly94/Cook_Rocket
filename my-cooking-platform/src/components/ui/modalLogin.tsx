"use client";
import React, {useState} from 'react';
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger
} from "@/components/ui/dialog";

interface Props {
    className?: string;
}

const ModalLogin: React.FC<Props> = ({ className }) => {
    const [isOpen, setIsOpen] = useState(false); // Стейт для відкриття/закриття діалогу

    const handleGoogleLogin = () => {
        console.log("Redirect to Google login");
        // Додайте логіку для Google OAuth тут.
    };

    return (
        <div className={className}>
            <Dialog open={isOpen} onOpenChange={setIsOpen}> {/* Встановлюємо стейт діалогу */}
                <DialogTrigger>Увійти</DialogTrigger>
                <DialogContent className="max-w-xl max-h-min">
                    <DialogHeader>
                        <DialogTitle className="flex justify-center">Увійти в акаунт</DialogTitle>
                    </DialogHeader>
                    <form className="space-y-4">
                        <DialogDescription>
                            <div>
                                <label
                                    htmlFor="email"
                                    className="block text-sm font-medium text-gray-600 mb-1 mt-4"
                                >
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                    placeholder="Введіть ваш email"
                                />
                                <label
                                    htmlFor="password"
                                    className="block text-sm mt-4 font-medium text-gray-600 mb-1"
                                >
                                    Пароль
                                </label>
                                <input
                                    type="password"
                                    id="password"
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                    placeholder="Введіть ваш пароль"
                                />
                            </div>
                        </DialogDescription>
                        <div className="mt-4">
                            <button
                                type="button"
                                onClick={handleGoogleLogin}
                                className="w-full flex items-center justify-center px-4 py-2 border border-gray-300 rounded-lg shadow-md bg-white hover:bg-gray-100 focus:ring-2 focus:ring-gray-300"
                            >
                                <img
                                    src="https://www.svgrepo.com/show/355037/google.svg"
                                    alt="Google logo"
                                    className="h-5 w-5 mr-2"
                                />
                                Увійти через Google
                            </button>
                        </div>
                        <DialogDescription className="text-sm text-gray-600 text-center mt-4">
                            Заповніть ці поля або скористайтесь входом через Google.
                        </DialogDescription>
                        <DialogFooter className="mt-4 flex justify-end space-x-4">
                            <DialogClose asChild>
                                <button
                                    type="button"
                                    className="px-4 py-2 bg-gray-300 text-black rounded-lg shadow-md hover:bg-gray-400 focus:ring-2 focus:ring-gray-300"
                                >
                                    Закрити
                                </button>
                            </DialogClose>
                            <button
                                type="submit"
                                className="px-4 py-2 bg-black text-white rounded-lg shadow-md hover:bg-black focus:ring focus:ring-black"
                            >
                                Підтвердити
                            </button>
                        </DialogFooter>
                    </form>
                </DialogContent>
            </Dialog>
        </div>
    );
};

export default ModalLogin;
