// components/RecipeForm.tsx
"use client"
import {useForm} from 'react-hook-form';
import {useEffect, useState} from 'react';

interface RecipeFormData {
    name: string;
    description: string;
    ingredients: string;
    steps: string;
    prepTime: string;
    servings: number;
    categoryId: number;
    images: FileList;
    extraResources: string;
}

interface Category {
    id: number;
    name: string;
}

const RecipeForm = () => {
    const { register, handleSubmit, setValue, formState: { errors } } = useForm<RecipeFormData>();
    const [selectedImages, setSelectedImages] = useState<File[]>([]);
    const [categories, setCategories] = useState<Category[]>([]);

    // Завантаження категорій при завантаженні компонента
    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const response = await fetch('/api/categories'); // Заміни на свій API-роут для отримання категорій
                if (!response.ok) {
                    throw new Error('Failed to fetch categories');
                }
                const data = await response.json();
                setCategories(data);
            } catch (error) {
                console.error('Error fetching categories:', error);
            }
        };

        fetchCategories();
    }, []);

    const onSubmit = (data: RecipeFormData) => {
        // Тут можна обробити відправку форми на сервер (API)
        console.log(data);
    };

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const files = e.target.files;
        if (files) {
            setSelectedImages(Array.from(files));
            // Оновлюємо значення для поля images у react-hook-form
            setValue('images', files);
        }
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 max-w-lg mx-auto p-6 border rounded-lg shadow-lg bg-white">
            {/* Назва рецепту */}
            <div>
                <label htmlFor="name" className="block text-sm font-semibold text-gray-700">Назва рецепту</label>
                <input
                    id="name"
                    type="text"
                    placeholder="Введіть назву рецепту"
                    {...register('name', { required: 'Назва рецепту обов\'язкова' })}
                    className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                />
                {errors.name && <span className="text-red-500 text-sm">{errors.name.message}</span>}
            </div>

            {/* Опис */}
            <div>
                <label htmlFor="description" className="block text-sm font-semibold text-gray-700">Опис</label>
                <textarea
                    id="description"
                    placeholder="Введіть опис рецепту"
                    {...register('description')}
                    className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                />
            </div>

            {/* Інгредієнти */}
            <div>
                <label htmlFor="ingredients" className="block text-sm font-semibold text-gray-700">Інгредієнти</label>
                <textarea
                    id="ingredients"
                    placeholder="Введіть інгредієнти"
                    {...register('ingredients')}
                    className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                />
            </div>

            {/* Кроки */}
            <div>
                <label htmlFor="steps" className="block text-sm font-semibold text-gray-700">Кроки</label>
                <textarea
                    id="steps"
                    placeholder="Опишіть кроки приготування"
                    {...register('steps')}
                    className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                />
            </div>

            {/* Час приготування */}
            <div>
                <label htmlFor="prepTime" className="block text-sm font-semibold text-gray-700">Час приготування</label>
                <input
                    id="prepTime"
                    type="text"
                    placeholder="Введіть час приготування"
                    {...register('prepTime')}
                    className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                />
            </div>

            {/* Кількість порцій */}
            <div>
                <label htmlFor="servings" className="block text-sm font-semibold text-gray-700">Кількість порцій</label>
                <input
                    id="servings"
                    type="number"
                    placeholder="Кількість порцій"
                    {...register('servings', { required: 'Кількість порцій обов\'язкова' })}
                    className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                />
                {errors.servings && <span className="text-red-500 text-sm">{errors.servings.message}</span>}
            </div>

            {/* Тип страви */}
            <div>
                <label htmlFor="categoryId" className="block text-sm font-semibold text-gray-700">Тип страви</label>
                <select
                    id="categoryId"
                    {...register('categoryId', { required: 'Тип страви обов\'язковий' })}
                    className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                >
                    {categories.map((category) => (
                        <option key={category.id} value={category.id}>
                            {category.name}
                        </option>
                    ))}
                </select>
                {errors.categoryId && <span className="text-red-500 text-sm">{errors.categoryId.message}</span>}
            </div>

            {/* Картинки */}
            <div>
                <label htmlFor="images" className="block text-sm font-semibold text-gray-700">Картинки</label>
                <input
                    id="images"
                    type="file"
                    accept="image/*"
                    multiple
                    onChange={handleImageChange}
                    className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                />
                {selectedImages.length === 0 && (
                    <span className="text-red-500 text-sm">Додайте хоча б однин файл</span>
                )}
            </div>

            {/* Додаткові ресурси */}
            <div>
                <label htmlFor="extraResources" className="block text-sm font-semibold text-gray-700">Додаткові ресурси</label>
                <textarea
                    id="extraResources"
                    placeholder="Введіть додаткові ресурси"
                    {...register('extraResources')}
                    className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                />
            </div>

            {/* Кнопка Додати рецепт */}
            <button
                type="submit"
                className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md"
            >
                Додати рецепт
            </button>
        </form>
    );
};

export default RecipeForm;
