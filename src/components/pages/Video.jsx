import React, {useState} from "react"
import Header from "../blocks/header/Header";
import Footer from "../blocks/footer/Footer";

import InfoHead from "../UI/infoHead/infoHead";
import Input from '../UI/input/Input'
import VideoBlock from "../blocks/video/VideoBlock";
import Collapse from "../UI/collapse/Collapse";

import classes from '../blocks/video/Video.module.css'

const Video = () => {

    const vid = [
        {category: 'Миссия 1 - “У меня всё под контролем', subcategory: 'Еда'},
        {category: 'Миссия 1 - “У меня всё под контролем', subcategory: 'Еда'},
        {category: 'Миссия 1 - “У меня всё под контролем', subcategory: 'Еда'},
        {category: 'Миссия 1 - “У меня всё под контролем', subcategory: 'Еда'},
        {category: 'Миссия 1 - “У меня всё под контролем', subcategory: 'Еда'},
        {category: 'Миссия 1 - “У меня всё под контролем', subcategory: 'Еда'},
        {category: 'Миссия 1 - “У меня всё под контролем', subcategory: 'Еда'},
        {category: 'Миссия 1 - “У меня всё под контролем', subcategory: 'Еда'},
    ]

    const [foundItem, setfoundItem] = useState(vid);
    const [searchLine, setSearchLine] = useState('');
    const filter = (e) => {
        const keyword = e.target.value;
        if (keyword !== '') {
            const results = vid.filter((item) => {
            return item.subcategory.toLowerCase().startsWith(keyword.toLowerCase());
        });
            setfoundItem(results);
        } else {
            setfoundItem(vid);
        }
        setSearchLine(keyword);
    };

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
                        onChange={(e) => filter(e)}
                    />

                    <div className="video__categories">
                        <h3>Миссия</h3>
                            <div> 
                                { vid.map( (item, index) => 
                                <Collapse toggle__text={item.category}>
                                    <p>{item.subcategory}</p>
                                </Collapse>
                                )}   
                            </div>
                        <h3>Облик</h3>
                            <Collapse>
                                <p>hmlg;</p>
                            </Collapse>
                        <h3>База</h3>
                            <Collapse>
                                <p>hmlg;</p>
                            </Collapse>
                    </div>

                </div>
                <div className="rightPage">
                    {/* <VideoBlock /> */}
                </div>
            </div>
        </div>
        <Footer />
    </>
    )
};

export default Video;

// {foundItem.length == 1 ? 
//     (support.map((item, index) => (
//         <SupportItem item={item} key={index} ></SupportItem> 
//     ))) : foundItem.map((item, index) => (
//         <SupportItem item={item} key={index} ></SupportItem>))}