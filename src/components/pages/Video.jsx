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
    const [videoSubcategory, setVideoSubcategory] = useState([{}])

    const [categoryName, setCategoryName] = useState()
    const [subcategoryName, setSubcategoryName] = useState()

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

    const isAdmin = true

    const [videoTitle, setVideoTitle] = useState('')
    const [videoURL, setVideoURL] = useState('')
    const [videoDescription, setVideoDescription] = useState('')
    const [userRole, setUserRole] = useState('')

    const addCategory = async () => {
        axios.get(`http://172.30.9.164/video/category/add?category=${categoryName}`)
        setCategoryName('')
    }

    const addSubcategory = async () => {
        axios.get(`http://172.30.9.164/video/category/subcategory/add?category=${categoryName}&subcategory=${subcategoryName}`)
        setSubcategoryName('')
        setCategoryName('')
    }

    const addVideo = async () => {
        axios.get(`http://172.30.9.164/video/add?category=${categoryName}&subcategory=${subcategoryName}&title=${videoTitle}&URL=${videoURL}&description=${videoDescription}&role=${userRole}`)
        setSubcategoryName('')
        setCategoryName('')
        setVideoTitle('')
        setVideoURL('')
        setVideoDescription('')
    }

    const role = [
        { title: 'Зарегистрированный пользователь'},
        { title: 'Незарегистрированный пользователь' },
        { title: 'Студент'},
    ];

    const chooseRole = (option) => {
        setUserRole(option);
    };

    const chooseCategory = (option) => {
        setCategoryName(option);

            const fetchData = async () => {
                
                const response = await fetch(`http://172.30.9.164/video/category/subcategory/get?category=${option}`);
                const data = await response.json();
                setVideoSubcategory(data)
            };
            fetchData()
    };


    const chooseSubCategory = (option) => {
        setSubcategoryName(option)
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
                    />

                    <CategoryList category={videoCategory}/>
                </div>

                <div className="rightPage">
                    {/* {video.map( (video, index) =>
                        <VideoBlock video={video} key={index} />
                    )}
                    
                    {videoCategory.length === 0 && <div>{errMsg}</div>}
                     */}

                </div>
            </div>

            {/* {isAdmin && 
                <div className={classes.add__video}>

                    <div className={classes.add__supItem}>
                        <h2>Добавить видео</h2>
                        <Dropdown handleOptionChange={chooseRole} option={role} />
                        <Dropdown handleOptionChange={chooseCategory} option={videoCategory} />
                        <Dropdown handleOptionChange={chooseSubCategory} option={videoSubcategory} />
                        <input 
                            type="text" 
                            id="videoTitle" 
                            onChange={(e) => setVideoTitle(e.target.value)}
                            value={videoTitle}
                            required
                            placeholder="Добавить название видео" 
                        />

                        <input 
                            type="text" 
                            id="videoURL" 
                            onChange={(e) => setVideoURL(e.target.value)}
                            value={videoURL}
                            required
                            placeholder="Добавить ссылку" 
                        />
                
                        <textarea 
                            id="videoDescription" 
                            cols="20" rows="5" 
                            placeholder="Добавить описание"
                            onChange={(e) => setVideoDescription(e.target.value)}
                            value={videoDescription}
                            required
                        />

                        <Button onClick={addVideo} className='customBtn' >Отправить видео в базу данных</Button> 
                    </div>

                    <div className={classes.add__supItem}>
                        <h2>Добавить категорию</h2>
                        <input 
                            type="text" 
                            id="categoryName" 
                            onChange={(e) => setCategoryName(e.target.value)}
                            value={categoryName}
                            required
                            placeholder="Название категории" 
                        />
                        <Button onClick={addCategory} className='customBtn' >Отправить название категории в базу данных</Button> 
                    </div>

                    <div className={classes.add__supItem}>
                        <h2>Добавить подкатегорию</h2>
                        <Dropdown handleOptionChange={chooseCategory} option={videoCategory} />

                        <input 
                            type="text" 
                            id="SubcategoryName" 
                            onChange={(e) => setSubcategoryName(e.target.value)}
                            value={subcategoryName}
                            required
                            placeholder="Название подкатегории" 
                        />
                        <Button onClick={addSubcategory} className='customBtn' >Отправить название подкатегории в базу данных</Button> 
                    </div>

                </div> 
                } */}
        </div>
        <Footer />
    </>
    )
};

export default Video;
