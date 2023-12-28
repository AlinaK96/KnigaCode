import React, {useState, useEffect} from 'react';
import { NavLink } from 'react-router-dom';
import axios from 'axios';

import Header from '../blocks/header/Header';
import Footer from '../blocks/footer/Footer';

import Input from '../UI/input/Input';
import CategoryList from "../blocks/video/CategoryList";

const Education = () => {

    const isStudent = true

    const VIDEO_URL = 'http://172.30.9.164/video/category/get'
    const [videoCategory, setVideoCategory] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            try {
                const videoCategory = await axios.get(VIDEO_URL);
                setVideoCategory(videoCategory.data);
                // const video = await fetch(`http://172.30.9.164/video/get?subcategory=${currentVideo}`);
                // const data = await video.json()
                // setVideo(data)
            } catch (error) {
                console.error(error);
            }
        };
        fetchData();
        }, []);

    return (
        <>
            <Header content='Видео-курсы' />
            <div className="content">
                {!isStudent ? 
                    <div className='noAccess'>
                        <p>Для получения доступа необходимо приобрести курс</p>
                        <i><NavLink to='/study' className='link' > посмотреть список доступных курсов</NavLink></i>
                    </div> :
                    <div className="book">
                        <div className="leftPage">
                            <Input 
                                type='search'
                                placeholder='Поиск...'
                                className='search'
                            />
                            {videoCategory.length === 0 ? 
                                <p><i>Здесь пока ничего нет</i></p> :
                                <CategoryList category={videoCategory} sublink='study__video' />
                            }
                        </div>
                        <div className="rightPage"></div>
                    </div>
                }
            </div>
            <Footer />
        </>
    );
}

export default Education;
