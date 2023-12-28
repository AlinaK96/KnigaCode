import React, { useState } from 'react';

const VideoPage = () => {
    const categoriesData = [
        { id: 1, name: 'Категория 1' },
        { id: 2, name: 'Категория 2' },
        { id: 3, name: 'Категория 3' },
    ];

    const subcategoriesData = [
        { id: 1, name: 'Подкатегория 1.1', categoryId: 1 },
        { id: 2, name: 'Подкатегория 1.2', categoryId: 1 },
        { id: 3, name: 'Подкатегория 2.1', categoryId: 2 },
        { id: 4, name: 'Подкатегория 3.1', categoryId: 3 },
    ];

    const videosData = [
        { id: 1, title: 'Видео 1', description: 'Описание видео 1', subcategoryId: 1 },
        { id: 2, title: 'Видео 2', description: 'Описание видео 2', subcategoryId: 1 },
        { id: 3, title: 'Видео 3', description: 'Описание видео 3', subcategoryId: 2 },
        { id: 4, title: 'Видео 4', description: 'Описание видео 4', subcategoryId: 3 },
    ];

    const [categories, setCategories] = useState(categoriesData);
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [subcategories, setSubcategories] = useState([]);
    const [selectedSubcategory, setSelectedSubcategory] = useState(null);
    const [videos, setVideos] = useState([]);

    const handleCategoryClick = (category) => {
        setSelectedCategory(category);
        // Фильтруем подкатегории по выбранной категории
        const filteredSubcategories = subcategoriesData.filter(subcategory => subcategory.categoryId === category.id);
        setSubcategories(filteredSubcategories);
        setSelectedSubcategory(null);
        setVideos([]);
    };

    const handleSubcategoryClick = (subcategory) => {
        setSelectedSubcategory(subcategory);
        // Фильтруем видео по выбранной подкатегории
        const filteredVideos = videosData.filter(video => video.subcategoryId === subcategory.id);
        setVideos(filteredVideos);
    };

    return (
        <div style={{color: 'white'}}>
        <div>
            <h2>Категории</h2>
            <ul>
            {categories.map(category => (
                <li key={category.id} onClick={() => handleCategoryClick(category)}>
                {category.name}
                </li>
            ))}
            </ul>
        </div>
        <div>
            <h2>Подкатегории</h2>
            <ul>
            {subcategories.map(subcategory => (
                <li key={subcategory.id} onClick={() => handleSubcategoryClick(subcategory)}>
                {subcategory.name}
                </li>
            ))}
            </ul>
        </div>
        <div>
            <h2>Видео</h2>
            {videos.map(video => (
            <div key={video.id}>
                <h3>{video.title}</h3>
                <p>{video.description}</p>
            </div>
            ))}
        </div>
        </div>
    );
};

export default VideoPage;
