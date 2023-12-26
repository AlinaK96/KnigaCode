import React, { useState } from "react"

import Header from "../blocks/header/Header";
import Footer from "../blocks/footer/Footer";
import InfoHead from "../UI/infoHead/infoHead";

import ExtraItem from "../blocks/items/ExtraItem";
import MainItem from "../blocks/items/MainItem";

const Study = () => {

    const [extraStudy, setExtaStudy] = useState([
        {title: 'Название курса', price: '1200', link: 'https://you.com/', description: 'Описание курса'},
        {title: 'Название курса', price: '1200', link: 'https://you.com/', description: 'Описание курса'},
        {title: 'Название курса', price: '1200', link: 'https://you.com/', description: 'Описание курса'},
        {title: 'Название курса', price: '1200', link: 'https://you.com/', description: 'Описание курса'},
        {title: 'Название курса', price: '1200', link: 'https://you.com/', description: 'Описание курса'},
    ])

    const [study, setStudy] = useState([
        {title: 'Название курса', price: '1200', link: 'https://you.com/', description: 'Описание курса', video: ''},
        {title: 'Название курса', price: '1200', link: 'https://you.com/', description: 'Описание курса', video: ''},
        {title: 'Название курса', price: '1200', link: 'https://you.com/', description: 'Описание курса', video: ''},
        {title: 'Название курса', price: '1200', link: 'https://you.com/', description: 'Описание курса', video: ''},
        {title: 'Название курса', price: '1200', link: 'https://you.com/', description: 'Описание курса', video: ''},
    ])

    return (
            <>
                <Header />
                <div className="content">
                    <InfoHead content='Обучение' />
                    <div className="book">
                        <div className="leftPage">
                            <h2>Основные курсы</h2>
                            {study.map( (item, index) => 
                                <MainItem data={item} key={index} />
                            )}
                        </div>
                        <div className="rightPage">
                            <h2>Дополнительные курсы</h2>
                            {extraStudy.map((item, index) => 
                                <ExtraItem data={item} key={index} />
                            )}
                        </div>
                    </div>
                </div>
                <Footer />
            </>
    )
};

export default Study;