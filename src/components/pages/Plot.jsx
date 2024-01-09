import React, {useState, useEffect} from "react"
import { NavLink } from "react-router-dom";
import axios from '../../api/axios';

import classes from './styles/match.module.css'

import Header from "../blocks/header/Header";
import Footer from "../blocks/footer/Footer";

import Name from "../blocks/items/Name";

const Plot = () => {

    const VARIFY_URL = '/calculation'

    const token = localStorage.getItem('token')
    const [role, setRole] = useState('notAuth')
    const [errMsg, setErrMsg] = useState('');


    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(VARIFY_URL, { 
                    headers: {Authorization: `Bearer ${token}`},
                });
                setRole(response.data.role)
            } catch (error) {
                if(error.response?.status !== 200) {
                    setErrMsg('Ошибка')
                } 
                }
            };
            fetchData();
    }, []);


    return (
        <>
            <Header content='СЦЕНАРИИ' />
            <div className="content">
                {role === 'notAuth' &&
                    <div className='noAccess'>
                        <p>Для получения доступа необходимо приобрести курс или зарегистрироваться</p>
                        <p><i><NavLink to='/register' className='link' > зарегистрироваться / войти в аккаунт</NavLink></i></p>
                        <p><i><NavLink to='/study' className='link' > посмотреть список доступных курсов</NavLink></i></p>
                    </div>
                }
                
                {role === 'AuthUser' &&
                    <div className='noAccess'>
                        <p>Для получения доступа к просчёту сценариев необходимо приобрести курс</p>
                        <p><i><NavLink to='/study' className='link' > посмотреть список доступных курсов</NavLink></i></p>

                        <div>
                            <Name />
                        </div>
                    </div>
                }

                {role === 'student' && 
                    <div>
                        <Name />
                    </div>
                }
                
            </div>
            <Footer />
        </>
    )
};

export default Plot;
