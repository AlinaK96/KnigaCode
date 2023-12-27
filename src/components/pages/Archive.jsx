import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './styles/arch.module.css'

import Header from '../blocks/header/Header';
import Footer from '../blocks/footer/Footer';
import InfoHead from '../UI/infoHead/infoHead';
import Table from '../UI/table/Table';


const Archive = () => {

    const isStudent = true
    const isRegistered = false

    return (
        <>
            <Header />
            <div className="content">
                <InfoHead content='Картотека' /> 
                {(!isStudent && !isRegistered) ? 
                    <div className='noAccess'>
                        <p>Для получения доступа необходимо приобрести курс или зарегистрироваться</p>
                        <p><i><NavLink to='/register' className='link' > зарегистрироваться / войти в аккаунт</NavLink></i></p>
                        <p><i><NavLink to='/study' className='link' > посмотреть список доступных курсов</NavLink></i></p>
                    </div>  : 
                    <div className={classes.archive}>
                        <h3>Архив</h3>
                        <Table />
                    </div> 
                }

            </div>
            <Footer />
        </>
    );
}

export default Archive;
