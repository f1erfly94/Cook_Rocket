'use client';

import React, {useEffect, useRef, useState} from 'react';
import {Button} from "@/components/ui";

const RecipeForm = () => {
    const [formData, setFormData] = useState({
        recipeName: '',
        description: '',
        ingredients: '',
        steps: '',
        prepTime: '',
        servings: '1',
        dishType: '',
        image: null as File | null,
        creationDate: new Date().toLocaleDateString(),
        isFavorite: false,
        additionalResources: '',
    });

    const descriptionRef = useRef<HTMLTextAreaElement | null>(null);
    const ingredientsRef = useRef<HTMLTextAreaElement | null>(null);
    const stepsRef = useRef<HTMLTextAreaElement | null>(null);
    const additionalResourcesRef = useRef<HTMLTextAreaElement | null>(null);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const {name, value} = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files ? e.target.files[0] : null;
        setFormData({
            ...formData,
            image: file,
        });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log(formData);
    };

    const autoResize = (e: React.ChangeEvent<HTMLTextAreaElement>, ref: React.RefObject<HTMLTextAreaElement>) => {
        if (ref.current) {
            ref.current.style.height = 'auto'
            ref.current.style.height = `${ref.current.scrollHeight}px`;
        }
    };

    useEffect(() => {
        if (descriptionRef.current) descriptionRef.current.style.height = `${descriptionRef.current.scrollHeight}px`;
        if (ingredientsRef.current) ingredientsRef.current.style.height = `${ingredientsRef.current.scrollHeight}px`;
        if (stepsRef.current) stepsRef.current.style.height = `${stepsRef.current.scrollHeight}px`;
        if (additionalResourcesRef.current) additionalResourcesRef.current.style.height = `${additionalResourcesRef.current.scrollHeight}px`;
    }, []);

    return (
        <form onSubmit={handleSubmit} className="space-y-4 p-6 max-w-2xl mx-auto bg-white rounded-lg shadow-lg">
            <div>
                <label htmlFor="recipeName" className="block font-semibold">Назва рецепту:</label>
                <input
                    type="text"
                    id="recipeName"
                    name="recipeName"
                    value={formData.recipeName}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md"
                    required
                />
            </div>

            <div>
                <label htmlFor="description" className="block font-semibold">Опис:</label>
                <textarea
                    ref={descriptionRef}
                    id="description"
                    name="description"
                    value={formData.description}
                    onChange={(e) => {
                        handleChange(e);
                        autoResize(e, descriptionRef);
                    }}
                    className="w-full max-h-[200px] px-4 py-2 border border-gray-300 rounded-md"
                    rows={4}
                    required
                />
            </div>

            <div>
                <label htmlFor="ingredients" className="  block font-semibold">Інгредієнти:</label>
                <textarea
                    ref={ingredientsRef}
                    id="ingredients"
                    name="ingredients"
                    value={formData.ingredients}
                    onChange={(e) => {
                        handleChange(e);
                        autoResize(e, ingredientsRef);
                    }}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md max-h-[200px] pt-4"
                    rows={4}
                    required
                />
            </div>

            <div>
                <label htmlFor="steps" className="block font-semibold">Кроки:</label>
                <textarea
                    ref={stepsRef}
                    id="steps"
                    name="steps"
                    value={formData.steps}
                    onChange={(e) => {
                        handleChange(e);
                        autoResize(e, stepsRef);
                    }}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md max-h-[200px] "
                    rows={4}
                    required
                />
            </div>

            <div>
                <label htmlFor="prepTime" className="block font-semibold">Час приготування:</label>
                <input
                    type="text"
                    id="prepTime"
                    name="prepTime"
                    value={formData.prepTime}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md"
                    required
                />
            </div>

            <div>
                <label htmlFor="servings" className="block font-semibold">Кількість порцій:</label>
                <input
                    type="number"
                    id="servings"
                    name="servings"
                    value={formData.servings}
                    onChange={(e) => {
                        const value = parseInt(e.target.value, 10);
                        setFormData({
                            ...formData,
                            servings: isNaN(value) ? '1' : String(Math.max(1, value)),
                        });
                    }}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md"
                    min="1"
                    step="1"
                    required
                />
            </div>


            <div>
                <label htmlFor="dishType" className="block font-semibold">Тип страви:</label>
                <select
                    id="dishType"
                    name="dishType"
                    value={formData.dishType}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md"
                    required
                >
                    <option value="">Оберіть тип страви</option>
                    <option value="main">Основна</option>
                    <option value="dessert">Десерт</option>
                    <option value="salad">Салат</option>
                </select>
            </div>

            <div>
                <label htmlFor="image" className="block font-semibold">Картинки:</label>
                <input
                    type="file"
                    id="image"
                    name="image"
                    onChange={handleImageChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md"
                />
            </div>
            
            <div>
                <label htmlFor="additionalResources" className="block font-semibold">Додаткові ресурси:</label>
                <textarea
                    ref={additionalResourcesRef}
                    id="additionalResources"
                    name="additionalResources"
                    value={formData.additionalResources}
                    onChange={(e) => {
                        handleChange(e);
                        autoResize(e, additionalResourcesRef);
                    }}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md max-h-[200px]"
                    rows={4}
                />
            </div>
            <Button  className="w-full">
                Додати рецепт
            </Button>
        </form>
    );
};

export default RecipeForm;



