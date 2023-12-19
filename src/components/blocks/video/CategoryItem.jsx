import React, { useState, useEffect } from "react";
import classes from './Video.module.css'

const CategoryItem = ({ category, onToggle, isCollapsed }) => {

    const [subcategories, setSubcategories] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(`http://172.30.9.164/video/category/subcategory/get?category=${category.category}`);
            const data = await response.json();
            setSubcategories(data)
        };
        fetchData()
    }, []);

    function openVideo(e) {
        console.log(e.target.innerText);
    }

    return (
        <>
            <div onClick={() => onToggle(category.id)} className={classes.CategoryItem}>
                <h3>{category.category} </h3> {isCollapsed ? <span>посмотреть</span> :  <span>свернуть</span> } 
            </div>
            <hr />
            {!isCollapsed && (
                <ul>
                {subcategories.map((subcategory, index) => (
                    <li key={index} onClick={(e) => openVideo(e)}>{subcategory.subcategory}</li>))}
                    {subcategories.length === 0 && <span><i>Подкатегорий пока нет</i></span> }
                </ul>
                
            )}
        </>
    );
};

export default CategoryItem;
