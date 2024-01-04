import React, {useState, useEffect} from "react"
import axios from '../../api/axios';

import Header from "../blocks/header/Header";
import Footer from "../blocks/footer/Footer";
import Input from "../UI/input/Input";

import StarsItem from "../blocks/rightPage/StarsItem";
import CategoryList from "../blocks/video/CategoryList";


const Stars = () => {

    const STARS_URL = '/stars/category/get'

    const [starsCategory, setStarsCategory] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            try {
                const starsCategory = await axios.get(STARS_URL);
                setStarsCategory(starsCategory.data);
            } catch (error) {
                console.error(error);
            }
        };
        fetchData();
        }, []);

    return (
        <>
        <Header content='Знаменитости' />
        <div className="content">
            <div className="book">
                <div className="leftPage">
                    <Input 
                        type='search'
                        placeholder='Поиск...'
                        className='search'
                    />

                    {starsCategory.length === 0 ? 
                        <p><i>Здесь пока ничего нет</i></p> :
                        <CategoryList category={starsCategory} sublink='stars'/>
                    }
                </div>

                <div className="rightPage">
                    {/* <StarsItem /> */}
                </div>
            </div>
        </div>
        <Footer />
    </>
    )
};

export default Stars;
