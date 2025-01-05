"use client";
import React from 'react';
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger
} from "@/components/ui/alert-dialog";

interface Props {
    className?: string;
}

const ModalLogin: React.FC<Props> = ({className}) => {
    const handleGoogleLogin = () => {
        console.log("Redirect to Google login");
        // Додайте логіку для Google OAuth тут.
    };
    return (
        <div className={className}>
            <AlertDialog>
                <AlertDialogTrigger>Увійти</AlertDialogTrigger>
                <AlertDialogContent className="max-w-xl max-h-min">
                    <AlertDialogHeader>
                        <AlertDialogTitle className="flex justify-center">Увійти в акаунт</AlertDialogTitle>
                        <AlertDialogDescription>
                            <form className="space-y-4">
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
                                <AlertDialogDescription className="text-sm text-gray-600 text-center">
                                    Заповніть ці поля або скористайтесь входом через Google.
                                </AlertDialogDescription>
                                <AlertDialogFooter className="mt-4 flex justify-end space-x-4">
                                    <AlertDialogCancel className="px-4 py-2 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400 focus:ring focus:ring-gray-200">
                                        Відмінити
                                    </AlertDialogCancel>
                                    <AlertDialogAction className="px-4 py-2 bg-black text-white rounded-lg shadow-md hover:bg-black focus:ring focus:ring-black">
                                        Підтвердити
                                    </AlertDialogAction>
                                </AlertDialogFooter>
                            </form>
                        </AlertDialogDescription>
                    </AlertDialogHeader>
                </AlertDialogContent>
            </AlertDialog>

        </div>
    );
};

export default ModalLogin;