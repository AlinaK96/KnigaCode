import React, {useEffect, useState} from "react"
import axios from "axios";
import classes from '../blocks/support/support.module.css'

import Header from "../blocks/header/Header";
import Footer from "../blocks/footer/Footer";
import InfoHead from "../UI/infoHead/infoHead";
import SupportItem from "../blocks/support/supportBlock";

const Support = () => {

    const SUPPORT_URL = 'http://172.30.9.164/support'

    const [support, setSupport] = useState([{}])
    const [errMsg, setErrMsg] = ('')
    const [supportQuestion, setSupportQuestion] = useState('')
    const [supportAnswer, setSupportAnswer] = useState('')
    const isAdmin = true

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(SUPPORT_URL);
                setSupport(response.data);
            } catch (error) {
                if(error.response?.status === 404){
                    setErrMsg('Ничего не найдено');
                }
                console.error(error);
            }
        };
    
        fetchData();
    }, []);


    const handleSubmit = async () => {
        axios.get(`http://172.30.9.164/support?question=${supportQuestion}&answer=${supportAnswer}`)
        setSupportAnswer('');
        setSupportQuestion('');
    }

    return (
        <>
            <Header />
            <div className="content">
                <InfoHead content='Мы подготовили для вас ответы на самые часто задаваемые вопросы' />
                <div className="book">
                    {errMsg}
                    <div>
                        {support.map((item, index) =>
                        <SupportItem item={item} key={index} ></SupportItem> 
                        )}
                    </div>
                </div>  

                {isAdmin && <div className={classes.add__supItem}>
                    <input 
                        type="text" 
                        id="supportQuestion" 
                        onChange={(e) => setSupportQuestion(e.target.value)}
                        value={supportQuestion}
                        required
                        placeholder="Добавить вопрос" 
                    />
                    <textarea 
                        id="supportAnswer" 
                        cols="20" rows="10" 
                        placeholder="Добавить ответ"
                        onChange={(e) => setSupportAnswer(e.target.value)}
                        value={supportAnswer}
                        required
                    />

                    <button onClick={handleSubmit} >Добавить</button> 
                </div> }
            </div>
            <Footer />
        </>
    )
};

export default Support;
