"use client";
import React from "react";
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger
} from "@/components/ui/dialog";

interface Props {
    className?: string;
}

const Modal: React.FC<Props> = ({ className }) => {
    const handleGoogleLogin = () => {
        console.log("Redirect to Google login");
    };

    return (
        <Dialog>
            <DialogTrigger>
                Зареєструватися
            </DialogTrigger>
            <DialogContent className="max-w-xl max-h-min">
                <DialogHeader>
                    <DialogTitle className="flex justify-center">Зареєструй акаунт</DialogTitle>
                </DialogHeader>
                <form className="space-y-4">
                    <div>
                        <label htmlFor="username" className="block text-sm font-medium text-gray-600 mb-1">
                            Ім'я
                        </label>
                        <input
                            type="text"
                            id="username"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                            placeholder="Введіть ваше ім'я"
                        />
                        <label htmlFor="email" className="block text-sm font-medium text-gray-600 mb-1 mt-4">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                            placeholder="Введіть ваш email"
                        />
                    </div>
                    <div>
                        <label htmlFor="password" className="block text-sm font-medium text-gray-600 mb-1">
                            Пароль
                        </label>
                        <input
                            type="password"
                            id="password"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                            placeholder="Введіть ваш пароль"
                        />
                        <label htmlFor="confirm-password" className="block text-sm mt-4 font-medium text-gray-600 mb-1">
                            Підтвердіть ваш пароль
                        </label>
                        <input
                            type="password"
                            id="confirm-password"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                            placeholder="Підтвердіть ваш пароль"
                        />
                    </div>
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
                    {/* Замінили DialogDescription на div */}
                    <div className="text-sm text-gray-600 text-center mt-4">
                        Заповніть ці поля або скористайтесь входом через Google.
                    </div>
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
    );
};

export default Modal;
