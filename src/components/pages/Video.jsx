import React, {useState, useEffect} from "react"
import axios from "axios";

import Header from "../blocks/header/Header";
import Footer from "../blocks/footer/Footer";

import InfoHead from "../UI/infoHead/infoHead";
import Input from '../UI/input/Input'
import VideoBlock from "../blocks/video/VideoBlock";

import Collapse from "../UI/collapse/Collapse";
import Button from "../UI/button/Button";
import Dropdown from '../UI/dropdown/Dropdown'

import classes from '../blocks/video/Video.module.css'

const Video = () => {

   // const VIDEO_URL = 'http://172.30.9.164/'
    const VIDEO_URL = ''
    const [errMsg, setErrMsg] = useState('')




    const cat = [
        {category: 'Миссия', subcategory: [
            {subcategory: 'Миссия 1 - “У меня всё под контролем”'},
            {subcategory: 'Миссия 1 - “У меня всё под контролем”'},
            {subcategory: 'Миссия 1 - “У меня всё под контролем”'},
            {subcategory: 'Миссия 1 - “У меня всё под контролем”'},
            {subcategory: 'Миссия 1 - “У меня всё под контролем”'},
            {subcategory: 'Миссия 1 - “У меня всё под контролем”'},
            {subcategory: 'Миссия 1 - “У меня всё под контролем”'},
        ]},
        {category: 'Облик'},
        {category: 'База'},
        {category: 'База'},
        {category: 'База'},
        {category: 'База'},
        {category: 'База'},
        {category: 'База'},
        {category: 'База'},
    ]

    console.log(cat);

    const Subcat = [
        {category: 'Миссия 1 - “У меня всё под контролем”'},
        {category: 'Миссия 2 - “Одна голова хорошо, а две лучше”'},
        {category: 'Миссия 3 - “Умеет заинтересовать”'},
        {category: 'Миссия 4 - “Золотые руки”'},
    ]

    const video = [
        {title: 'video title', description: 'Описание видео' },
        {title: 'video title', description: 'Описание видео' },
        {title: 'video title', description: 'Описание видео' },
        {title: 'video title', description: 'Описание видео' },
        {title: 'video title', description: 'Описание видео' },
        {title: 'video title', description: 'Описание видео' },
    ]



    //const [videoCategory, setVideoCategory] = useState([{}])    
    //const [videoSubcategory, setVideoSubcategory] = useState([{}])

    const [videoCategory, setVideoCategory] = useState(cat)
    const [videoSubcategory, setVideoSubcategory] = useState(Subcat)

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


    // const [foundItem, setfoundItem] = useState(cat);
    // const [searchLine, setSearchLine] = useState('');
    // const filter = (e) => {
    //     const keyword = e.target.value;
    //     console.log(keyword);
    //     if (keyword !== '') {
    //         const results = cat.filter((item) => {
    //         return item.category.toLowerCase().startsWith(keyword.toLowerCase());
    //     });
    //         setfoundItem(results);
    //     } else {
    //         setfoundItem(cat);
    //     }
    //     setSearchLine(keyword);
    // };

    function openVideo(){
        console.log('video');
    }

    const isAdmin = true
    const [sendVideoCat, setSendVideoCat] = useState(videoCategory)
    const [sendvideoSubCat, setSendvideoSubCat] = useState(videoSubcategory)

    const [videoTitle, setVideoTitle] = useState('')
    const [videoURL, setVideoURL] = useState('')
    const [videoDescription, setVideoDescription] = useState('')

    const handleSubmit = async () => {
        // axios.get(`http://172.30.9.164/support/add?question=${videoTitle}&answer=${videoDescription}`)
        // .then(response => {
        //     // setSupport(response.data);
        //     console.log(response.data);
        // })
        setVideoDescription('');
        setVideoTitle('');
        setVideoURL('');
    }

    const [dropCategoryMission, setDropCategoryMission] = useState('Миссия');
    const changeDropCategoryMission = (newPeriod) => {
        setDropCategoryMission(newPeriod);
        console.log(dropCategoryMission);
    }

    const [dropCategorySubCat, setDropCategorySubCat] = useState('Миссия');
    const changeDropCategorySubCat = (newPeriod) => {
        setDropCategorySubCat(newPeriod);
        console.log(dropCategorySubCat);
    }

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
                        //onChange={(e) => filter(e)}
                    />

                    <div className="video__categories">
                    {/* {foundItem.length === 1 ? 
                            (videoCategory.map((item, index) => (
                                <Collapse key={index} toggle__text={item.category} /> 
                            ))) : foundItem.map((item, index) => (
                                <Collapse key={index} toggle__text={item.category} /> ))} */}

                        {videoCategory.map( (item, index) => 
                            <Collapse key={index} toggle__text={item.category} > 
                                {videoSubcategory.map( (cat, index) => 
                                    <p key={index} onClick={openVideo} > {cat.category} </p>
                                )}
                            </Collapse>
                        )}
                    </div>

                </div>

                <div className="rightPage">
                    {video.map( (video, index) =>
                        <VideoBlock video={video} key={index} />
                    )}
                    
                    {videoCategory.length === 0 && <div>{errMsg}</div>}
                    

                </div>
            </div>

            {isAdmin && 
                <div className={classes.add__supItem}>
                    <div className={classes.videoDropdown}>
                        <Dropdown dropDownOption={videoCategory} updated={changeDropCategoryMission}/>
                        <Dropdown dropDownOption={videoSubcategory} updated={changeDropCategorySubCat}/>
                    </div>
                    <input 
                        type="text" 
                        id="videoTitle" 
                        onChange={(e) => setVideoTitle(e.target.value)}
                        value={videoTitle}
                        required
                        placeholder="Добавить название нового видео" 
                    />
                    <input 
                        type="text" 
                        id="videoURL" 
                        onChange={(e) => setVideoURL(e.target.value)}
                        value={videoURL}
                        required
                        placeholder="Добавить ссылку на видео" 
                    />
                    <textarea 
                        id="videoDescription" 
                        cols="20" rows="5" 
                        placeholder="Добавить описание нового видео"
                        onChange={(e) => setVideoDescription(e.target.value)}
                        value={videoDescription}
                        required
                    />

                    <Button onClick={handleSubmit} className='customBtn' >Отправить видео в базу данных</Button> 
                </div> }
        </div>
        <Footer />
    </>
    )
};

export default Video;
