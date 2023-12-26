import React, {useState, useEffect} from "react"
import axios from "axios";

import Header from "../blocks/header/Header";
import Footer from "../blocks/footer/Footer";
import CategoryList from "../blocks/video/CategoryList";

import Input from "../UI/input/Input";
import InfoHead from "../UI/infoHead/infoHead";

const Stars = () => {
    const STARS_URL = 'http://172.30.9.164/stars/category/get'

    const [starsCategory, setStarsCategory] = useState([{}])
    const [errMsg, setErrMsg] = useState('')

    useEffect(() => {
        const fetchData = async () => {
            try {
                const starsCategory = await axios.get(STARS_URL);
                setStarsCategory(starsCategory.data);
            } catch (error) {
                if(error.starsCategory?.status === 404){
                    setErrMsg('Ничего не найдено');
                }
                console.error(error);
            }
        };
        fetchData();
        }, []);

    return (
        <>
        <Header />
        <div className="content">
            <InfoHead content='Знаменитости' />
            <div className="book">
                <div className="leftPage">
                    <Input 
                        type='search'
                        placeholder='Поиск...'
                        className='search'
                    />
                    <CategoryList category={starsCategory} sublink='stars'/>
                </div>

                <div className="rightPage"></div>
            </div>
        </div>
        <Footer />
    </>
    )
};

export default Stars;
