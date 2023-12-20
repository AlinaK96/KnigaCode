import React, { useState, useEffect } from "react";
import classes from './Video.module.css'

const CategoryItem = ({ category, onToggle, isCollapsed }) => {

    const [subcategories, setSubcategories] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            if (category.title){
            const response = await fetch(`http://172.30.9.164/video/category/subcategory/get?category=${category.title}`);
            const data = await response.json();
            setSubcategories(data)}
        };
        fetchData()
    }, []);

    function openVideo(e) {
        const filteredCat = e.target.innerText;
        const fetchData = async () => {
            const response = await fetch(`http://172.30.9.164/video/get?subcategory=${filteredCat}`);
            const data = await response.json()
            console.log(data);
        };
        fetchData()
    }

    return (
        <>
            <div onClick={() => onToggle(category.id)} className={classes.CategoryItem}>
                <h3>{category.title} </h3> {isCollapsed ? <span>посмотреть</span> :  <span>свернуть</span> } 
            </div>
            <hr />
            {!isCollapsed && (
                <ul>
                {subcategories.map((subcategory, index) => (
                    <li key={index} onClick={(e) => openVideo(e)}>{subcategory.title}</li>))}
                    {subcategories.length === 0 && <span><i>Подкатегорий пока нет</i></span> }
                </ul>
                
            )}
        </>
    );
};

export default CategoryItem;
