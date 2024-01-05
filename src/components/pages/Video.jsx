import React, {useState, useEffect} from "react"
import axios from '../../api/axios';
import classes from '../blocks/video/Video.module.css'

import Header from "../blocks/header/Header";
import Footer from "../blocks/footer/Footer";
import Input from '../UI/input/Input'

import VideoBlock from "../blocks/video/VideoBlock";
import CategoryList from "../blocks/video/CategoryList";

const Video = () => {

    const VIDEO_URL = '/video/category/get'

    const [videoCategory, setVideoCategory] = useState([])
    const currentVideo = localStorage.getItem('filteredCat')
    const page = 'video'
    const [video, setVideo] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            try {
                const videoCategory = await axios.get(VIDEO_URL);
                setVideoCategory(videoCategory.data);
                const video = await fetch(`http://172.30.9.164/video/${currentVideo}/video_get`);
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
        <Header content='ВИДЕО'/>
        <div className="content">
            <div className="book">
                <div className="leftPage">
                    <Input 
                        type='search'
                        placeholder='Поиск...'
                        className={classes.search}
                    />

                    {videoCategory.length === 0 ? 
                        <p><i>Здесь пока ничего нет</i></p> :
                        <CategoryList category={videoCategory} sublink='video' />
                    } 
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
