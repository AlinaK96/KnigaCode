import React from 'react';
import { NavLink } from 'react-router-dom';

import Header from '../blocks/header/Header';
import Footer from '../blocks/footer/Footer';
import Table from '../UI/table/Table';


const Archive = () => {
    const token = localStorage.getItem('token')
    const role = localStorage.getItem('role')

    const isStudent = true
    const isRegistered = false

    return (
        <>
            <Header content='Картотека' />
            <div className="content">
                
                {(!isStudent && !isRegistered) ? 
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
