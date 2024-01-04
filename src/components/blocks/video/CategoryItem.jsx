import React, { useState, useEffect } from "react";
import classes from './Video.module.css'

const CategoryItem = ({ category, onToggle, isCollapsed, sublink }) => {

    const [subcategories, setSubcategories] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            if (category.title){
            const response = await fetch(`http://109.171.3.245:8080/${sublink}/${category.title}/subcategory/get`);
            const data = await response.json();
            setSubcategories(data)}
        };
        fetchData()
    }, []);

    function openDetails(e) {
        const filteredCat = e.target.innerText;
        localStorage.setItem('filteredCat', filteredCat)
        const fetchData = async () => {
            try {
                const video = await fetch(`http://109.171.3.245:8080/video/${filteredCat}/video_get`);
                const data = await video.json()
                console.log(data)
            } catch (error) {
                console.error(error);
            }
        };
        fetchData();
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
                        <li key={index} onClick={(e) => openDetails(e)}>{subcategory.title}</li>))}
                    {subcategories.length === 0 && <span><i>Подкатегорий пока нет</i></span> }
                </ul>
                
            )}
        </>
    );
};

export default CategoryItem;
