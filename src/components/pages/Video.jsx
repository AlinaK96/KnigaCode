import React, {useState, useEffect} from "react"
import axios from "axios";
import classes from '../blocks/video/Video.module.css'

import Header from "../blocks/header/Header";
import Footer from "../blocks/footer/Footer";
import InfoHead from "../UI/infoHead/infoHead";
import Input from '../UI/input/Input'

import VideoBlock from "../blocks/video/VideoBlock";
import CategoryList from "../blocks/video/CategoryList";

const Video = () => {

    const VIDEO_URL = 'http://172.30.9.164/video/category/get'

    const [videoCategory, setVideoCategory] = useState([{}])

    const currentVideo = localStorage.getItem('filteredCat')
    const [video, setVideo] = useState([{}])

    useEffect(() => {
        const fetchData = async () => {
            try {
                const videoCategory = await axios.get(VIDEO_URL);
                setVideoCategory(videoCategory.data);
                const video = await fetch(`http://172.30.9.164/video/get?subcategory=${currentVideo}`);
                const data = await video.json()
                setVideo(data)
            } catch (error) {
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
                    <CategoryList category={videoCategory} sublink='video' />
                </div>

                <div className="rightPage">
                    {video.map( (video, index) =>
                        <VideoBlock video={video} key={index} />
                    )}
                    
                    {videoCategory.length === 0 && <div>Видео пока нет</div>}
                </div>
            </div>
        </div>
        <Footer />
    </>
    )
};

export default Video;
