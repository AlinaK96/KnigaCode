import React, {useState, useEffect} from "react"
import classes from './styles/edit.module.css'
import axios from "axios";

import Header from "../blocks/header/Header";
import Footer from "../blocks/footer/Footer";
import InfoHead from "../UI/infoHead/infoHead";

import Button from "../UI/button/Button";
import Dropdown from "../UI/dropdown/Dropdown";

const Edit = () => {

    const isAdmin = true
    const [errMsg, setErrMsg] = useState('')


    //видео
    const VIDEO_URL = 'http://172.30.9.164/video/category/get'
    

    const [categoryName, setCategoryName] = useState('')
    const [subcategoryName, setSubcategoryName] = useState('')

    const [videoCategory, setVideoCategory] = useState([{}])
    const [videoSubcategory, setVideoSubcategory] = useState([{}])

    const [videoTitle, setVideoTitle] = useState('')
    const [videoURL, setVideoURL] = useState('')
    const [videoDescription, setVideoDescription] = useState('')
    const [userRole, setUserRole] = useState('')

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(VIDEO_URL);
                setVideoCategory(response.data);
            } catch (error) {
                if(error.response?.status === 404){
                    setErrMsg('Категории для видео не найдены');
                }
                console.error(error);
            }
        };
        fetchData();
        }, []);

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

    //support
    const [supportQuestion, setSupportQuestion] = useState('')
    const [supportAnswer, setSupportAnswer] = useState('')
    const handleSubmit = async () => {
        axios.get(`http://172.30.9.164/support/add?question=${supportQuestion}&answer=${supportAnswer}`)
        setSupportAnswer('');
        setSupportQuestion('');
    }

    return (
        <>
            <Header />
            {isAdmin &&
            <div className="content">
            
                <InfoHead content='Редактировать страницы'/>


                <div className={classes.editContent}>
                    <h2>Блок "Видео"</h2>
                    <div className={classes.editVideo}>

                        <div className={classes.edit}>
                            <h3>Добавить видео</h3>
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
                                cols="20" rows="3" 
                                placeholder="Добавить описание"
                                onChange={(e) => setVideoDescription(e.target.value)}
                                value={videoDescription}
                                required
                            />

                            <Button onClick={addVideo} className='customBtn' >Отправить видео в базу данных</Button> 
                        </div>

                        <div className={classes.edit}>
                            <h3>Добавить категорию</h3>
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

                        <div className={classes.edit}>
                            <h3>Добавить подкатегорию</h3>
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
                </div> 

                <div className={classes.editContent}>
                    <h2>Блок "Поддержка"</h2>
                    <div className={classes.edit}>
                        <input 
                            type="text" 
                            id="supportQuestion" 
                            onChange={(e) => setSupportQuestion(e.target.value)}
                            value={supportQuestion}
                            required
                            placeholder="Добавить новый вопрос" 
                        />
                        <textarea 
                            id="supportAnswer" 
                            cols="20" rows="3" 
                            placeholder="Добавить ответ"
                            onChange={(e) => setSupportAnswer(e.target.value)}
                            value={supportAnswer}
                            required
                        />

                        <Button onClick={handleSubmit} className='customBtn' >Отправить в базу данных</Button> 
                    </div>
                </div>

            </div>
            }
            <Footer />
        </>
    )
};

export default Edit;
