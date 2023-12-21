import React, {useState, useEffect} from "react"
import axios from "axios";

import Header from "../blocks/header/Header";
import Footer from "../blocks/footer/Footer";

import InfoHead from "../UI/infoHead/infoHead";
import Input from '../UI/input/Input'
import VideoBlock from "../blocks/video/VideoBlock";

import Button from "../UI/button/Button";
import Dropdown from "../UI/dropdown/Dropdown";

import classes from '../blocks/video/Video.module.css'
import CategoryList from "../blocks/video/CategoryList";

const Video = () => {

    const VIDEO_URL = 'http://172.30.9.164/video/category/get'
    const [errMsg, setErrMsg] = useState('')

    const [videoCategory, setVideoCategory] = useState([{}])

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(VIDEO_URL);
                setVideoCategory(response.data);
            } catch (error) {
                if(error.response?.status === 404){
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
            <InfoHead content='Видео' />
            <div className="book">
                <div className="leftPage">
                    <Input 
                        type='search'
                        placeholder='Поиск...'
                        className={classes.search}
                    />

                    <CategoryList category={videoCategory}/>
                </div>

                <div className="rightPage">
                    {/* {video.map( (video, index) =>
                        <VideoBlock video={video} key={index} />
                    )}*/}
                    
                    {videoCategory.length === 0 && <div>{errMsg}</div>}

                </div>
            </div>
        </div>
        <Footer />
    </>
    )
};

export default Video;
