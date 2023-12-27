import React from "react"
import { NavLink } from 'react-router-dom';

import Header from "../blocks/header/Header";
import Footer from "../blocks/footer/Footer";
import InfoHead from '../UI/infoHead/infoHead';

const Name = () => {

    const isStudent = false
    const isRegistered = false

    return (
        <>
            <Header />
            <div className="content">
                <InfoHead content='Подбор имени' />
                {(!isStudent && !isRegistered) ? 
                    <div className='noAccess'>
                        <p>Для получения доступа необходимо приобрести курс или зарегистрироваться</p>
                        <p><i><NavLink to='/study' className='link' > посмотреть список доступных курсов</NavLink></i></p>
                        <p><i><NavLink to='/register' className='link' > зарегистрироваться / войти в аккаунт</NavLink></i></p>
                    </div>  : 
                    <div className="book">
                        <div className="leftPage">

                        </div>
                        <div className="rightPage"></div>
                    </div> 
                }

                
            </div>
            <Footer />
        </>
    )
};

export default Name;
