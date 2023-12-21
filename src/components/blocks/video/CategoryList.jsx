import React, { useState } from "react";
import CategoryItem from "./CategoryItem";

const CategoryList = ({category}) => {

    const [collapsedCategories, setCollapsedCategories] = useState([]);

    const handleCategoryToggle = (categoryId) => {
        if (collapsedCategories.includes(categoryId)) {
            setCollapsedCategories(
                collapsedCategories.filter((id) => id !== categoryId)
            );
        } else {
            setCollapsedCategories([...collapsedCategories, categoryId]);
        }
    };

    return (
        <div>
            {category.map((category, index) => (
                <div key={index}>
                    <CategoryItem
                        key={Date.now()}
                        category={category}
                        onToggle={handleCategoryToggle}
                        isCollapsed={collapsedCategories.includes(category.id)}
                    /> 
                </div>
            ))}
        </div>
    );
};

export default CategoryList;
