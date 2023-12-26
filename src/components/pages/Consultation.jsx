import React, { useState } from "react"

import Header from "../blocks/header/Header";
import Footer from "../blocks/footer/Footer";
import InfoHead from "../UI/infoHead/infoHead";

import ExtraItem from "../blocks/items/ExtraItem";
import MainItem from "../blocks/items/MainItem";

const Consultation = () => {

    const [extraConsultation, setExtaConsultation] = useState([
        {title: 'Название консультации', price: '1200', link: 'https://you.com/', description: 'Описание консультации'},
        {title: 'Название консультации', price: '1200', link: 'https://you.com/', description: 'Описание консультации'},
        {title: 'Название консультации', price: '1200', link: 'https://you.com/', description: 'Описание консультации'},
        {title: 'Название консультации', price: '1200', link: 'https://you.com/', description: 'Описание консультации'},
        {title: 'Название консультации', price: '1200', link: 'https://you.com/', description: 'Описание консультации'},
    ])

    const [consultation, setConsultation] = useState([
        {title: 'Название консультации', price: '1200', link: 'https://you.com/', description: 'Описание консультации', video: ''},
        {title: 'Название консультации', price: '1200', link: 'https://you.com/', description: 'Описание консультации', video: ''},
        {title: 'Название консультации', price: '1200', link: 'https://you.com/', description: 'Описание консультации', video: ''},
        {title: 'Название консультации', price: '1200', link: 'https://you.com/', description: 'Описание консультации', video: ''},
        {title: 'Название консультации', price: '1200', link: 'https://you.com/', description: 'Описание консультации', video: ''},
    ])

    return (
            <>
                <Header />
                <div className="content">
                    <InfoHead content='Консультации' />
                    <div className="book">
                        <div className="leftPage">
                            <h2>Основные</h2>
                            {consultation.map( (item, index) => 
                                <MainItem data={item} key={index} />
                            )}
                        </div>
                        <div className="rightPage">
                            <h2>Дополнительные</h2>
                            {extraConsultation.map((item, index) => 
                                <ExtraItem data={item} key={index} />
                            )}
                        </div>
                    </div>
                </div>
                <Footer />
            </>
    )
};

export default Consultation;
