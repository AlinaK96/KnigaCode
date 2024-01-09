import React, {useState, useEffect} from 'react';
import { NavLink } from 'react-router-dom';
import axios from '../../api/axios';

import Header from '../blocks/header/Header';
import Footer from '../blocks/footer/Footer';
import Table from '../UI/table/Table';


const Archive = () => {

    const VARIFY_URL = '/calculation'
    const token = localStorage.getItem('token')
	const [errMsg, setErrMsg] = useState('');

    const [role, setRole] = useState('notAuth')

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
            <Header content='КАРТОТЕКА' />
            <div className="content">
                
                {(!(role === 'AuthUser') && !(role === 'student')) ? 
                    <div className='noAccess'>
                        <p>Для получения доступа необходимо приобрести курс или зарегистрироваться</p>
                        <p><i><NavLink to='/register' className='link' > зарегистрироваться / войти в аккаунт</NavLink></i></p>
                        <p><i><NavLink to='/study' className='link' > посмотреть список доступных курсов</NavLink></i></p>
                    </div>  : 
                        <Table />
                }

            </div>
            <Footer />
        </>
    );
}

export default Archive;
