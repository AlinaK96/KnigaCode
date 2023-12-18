import React from "react"
import Header from '../blocks/header/Header'
import Footer from '../blocks/footer/Footer'
import InfoHead from "../UI/infoHead/infoHead";
import { NavLink } from "react-router-dom";

const Contacts = () => {
    return (
        <>
            <Header />
            <div className="content">
                <InfoHead content='Контакты' />
                <div className="simplePage">
                    <h2>Оставить заявку на расчёт или обучение Вы можете написав автору системы <NavLink to='/support' className='whiteLink' >Сладе Новицки</NavLink> </h2>

                    <h2>Ответы на интересующие Вас вопросы Вы можете найти в разделе <NavLink to='/support' className='whiteLink' >"Поддержка"</NavLink> </h2>
                </div>
                
            </div>
            <Footer />
        </>
    )
};

export default Contacts;
