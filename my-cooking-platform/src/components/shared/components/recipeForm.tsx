'use client'
import {useEffect, useState} from 'react';

export default function CreateRecipeForm() {
    const [formData, setFormData] = useState({
        name: '',
        description: '',
        ingredients: '',
        steps: '',
        prepTime: '',
        cookTime: '',
        totalTime: '',
        servings: '1', // Зберігаємо як рядок
        categoryId: '', // Вибрана категорія
        authorId: '1', // це можна отримати через аутентифікацію
        image: '',
        extraResources: '',
    });

    const [categories, setCategories] = useState([]);

    useEffect(() => {
        const fetchCategories = async () => {
            const response = await fetch('/api/categories');
            if (response.ok) {
                const data = await response.json();
                setCategories(data);
            }
        };

        fetchCategories();
    }, []);

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
    ) => {
        const { name, value, type } = e.target;

        setFormData((prev) => ({
            ...prev,
            [name]: type === 'number' ? Number(value) || 0 : value, // Приводимо до числа, якщо поле є числовим
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        // Форматування даних для запиту
        const formattedData = {
            ...formData,
            authorId: parseInt(formData.authorId, 10),
            categoryId: parseInt(formData.categoryId, 10),
            servings: parseInt(formData.servings, 10),
            cookTime: formData.cookTime || null, // Перетворюємо пусті рядки на null
            prepTime: formData.prepTime || null,
            totalTime: formData.totalTime || null,
            extraResources: formData.extraResources || null,
            image: formData.image || null,
            steps: formData.steps || null,
        };

        try {
            const response = await fetch('/api/recipes', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formattedData),
            });

            if (response.ok) {
                alert('Recipe created successfully!');
            } else {
                const error = await response.json();
                console.error(error);
                alert(`Error: ${error.error || 'Failed to create recipe'}`);
            }
        } catch (error) {
            console.error('Error:', error);
            alert('Something went wrong!');
        }
    };

    return (
        <form onSubmit={handleSubmit} className="w-full max-w-xl mx-auto p-6 bg-gray-100 rounded-lg shadow-lg">
            <div className="mb-4">
                <label htmlFor="name" className="block text-lg font-medium text-gray-700">Recipe Name</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Recipe name"
                    required
                    className="w-full p-3 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </div>

            <div className="mb-4">
                <label htmlFor="description" className="block text-lg font-medium text-gray-700">Description</label>
                <textarea
                    id="description"
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    placeholder="Recipe description"
                    required
                    className="w-full p-3 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </div>

            <div className="mb-4">
                <label htmlFor="ingredients" className="block text-lg font-medium text-gray-700">Ingredients</label>
                <textarea
                    id="ingredients"
                    name="ingredients"
                    value={formData.ingredients}
                    onChange={handleChange}
                    placeholder="Ingredients"
                    required
                    className="w-full p-3 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </div>

            <div className="mb-4">
                <label htmlFor="steps" className="block text-lg font-medium text-gray-700">Steps</label>
                <textarea
                    id="steps"
                    name="steps"
                    value={formData.steps}
                    onChange={handleChange}
                    placeholder="Steps"
                    required
                    className="w-full p-3 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </div>

            <div className="mb-4">
                <label htmlFor="prepTime" className="block text-lg font-medium text-gray-700">Preparation Time</label>
                <input
                    type="text"
                    id="prepTime"
                    name="prepTime"
                    value={formData.prepTime}
                    onChange={handleChange}
                    placeholder="Preparation time"
                    className="w-full p-3 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </div>

            <div className="mb-4">
                <label htmlFor="cookTime" className="block text-lg font-medium text-gray-700">Cooking Time</label>
                <input
                    type="text"
                    id="cookTime"
                    name="cookTime"
                    value={formData.cookTime}
                    onChange={handleChange}
                    placeholder="Cooking time"
                    className="w-full p-3 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </div>

            <div className="mb-4">
                <label htmlFor="totalTime" className="block text-lg font-medium text-gray-700">Total Time</label>
                <input
                    type="text"
                    id="totalTime"
                    name="totalTime"
                    value={formData.totalTime}
                    onChange={handleChange}
                    placeholder="Total time"
                    className="w-full p-3 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </div>

            <div className="mb-4">
                <label htmlFor="servings" className="block text-lg font-medium text-gray-700">Servings</label>
                <input
                    type="number"
                    id="servings"
                    name="servings"
                    value={formData.servings}
                    onChange={handleChange}
                    placeholder="Number of servings"
                    required
                    className="w-full p-3 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </div>

            <div className="mb-4">
                <label htmlFor="image" className="block text-lg font-medium text-gray-700">Image URL</label>
                <input
                    type="text"
                    id="image"
                    name="image"
                    value={formData.image}
                    onChange={handleChange}
                    placeholder="Image URL"
                    className="w-full p-3 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </div>
            <div className="mb-4">
                <label htmlFor="categoryId" className="block text-lg font-medium text-gray-700">Category</label>
                <select
                    id="categoryId"
                    name="categoryId"
                    value={formData.categoryId}
                    onChange={handleChange}
                    required
                    className="w-full p-3 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                    <option value="" disabled>Select a category</option>
                    {categories.map((category: { id: number; name: string }) => (
                        <option key={category.id} value={category.id}>
                            {category.name}
                        </option>
                    ))}
                </select>
            </div>
            <div className="mb-4">
                <label htmlFor="extraResources" className="block text-lg font-medium text-gray-700">Extra
                    Resources</label>
                <textarea
                    id="extraResources"
                    name="extraResources"
                    value={formData.extraResources}
                    onChange={handleChange}
                    placeholder="Extra resources (optional)"
                    className="w-full p-3 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </div>

            <button type="submit"
                    className="w-full p-3 mt-6 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
                Create Recipe
            </button>
        </form>
    )
        ;
}
