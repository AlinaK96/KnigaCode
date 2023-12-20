import React, {useEffect, useState} from "react"
import axios from "axios";
import classes from '../blocks/support/support.module.css'

import Header from "../blocks/header/Header";
import Footer from "../blocks/footer/Footer";
import InfoHead from "../UI/infoHead/infoHead";
import SupportItem from "../blocks/support/supportBlock";

import Input from '../UI/input/Input'
import Button from "../UI/button/Button";

const Support = () => {

    const SUPPORT_URL = 'http://172.30.9.164/support/get'

    const [support, setSupport] = useState([{}])
    const [foundItem, setfoundItem] = useState(support);
    const [errMsg, setErrMsg] = useState('')

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




    const [searchLine, setSearchLine] = useState('');
    const filter = (e) => {
        const keyword = e.target.value;
        if (keyword !== '') {
            const results = support.filter((item) => {
            return item.question.toLowerCase().startsWith(keyword.toLowerCase());
        });
            setfoundItem(results);
        } else {
            setfoundItem(support);
        }
        setSearchLine(keyword);
    };
    return (
        <>
            <Header />
            <div className="content">
                <InfoHead content='Мы подготовили для вас ответы на самые часто задаваемые вопросы' />
                <div className={classes.header__addBtn}>
                    <Input 
                        type='search'
                        placeholder='Найти вопрос...'
                        onChange={(e) => filter(e)}
                    />
                    <a href="https://you.com/" target="blank" className="customLink">Задать вопрос</a>
                </div>

                <div className="book">
                    {errMsg}
                    <div className={classes.support__data}>
                        {foundItem.length === 1 ? 
                            (support.map((item, index) => (
                                <SupportItem item={item} key={index} ></SupportItem> 
                            ))) : foundItem.map((item, index) => (
                                <SupportItem item={item} key={index} ></SupportItem>))}
                        
                    </div>
                </div>  

            </div>
            <Footer />
        </>
    )
};

export default Support;
