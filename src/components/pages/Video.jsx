import React from "react"
import Header from "../blocks/header/Header";
import Footer from "../blocks/footer/Footer";

import InfoHead from "../UI/infoHead/infoHead";
import Input from '../UI/input/Input'
import VideoBlock from "../blocks/video/VideoBlock";

const Video = () => {
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
                    />
                    {/* <VideoBlock /> */}
                </div>
                <div className="rightPage"></div>
            </div>
        </div>
        <Footer />
    </>
    )
};

export default Video;
