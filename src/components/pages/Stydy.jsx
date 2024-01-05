import React, { useState, useEffect } from "react"
import axios from '../../api/axios';

import Header from "../blocks/header/Header";
import Footer from "../blocks/footer/Footer";

import ExtraItem from "../blocks/items/ExtraItem";
import MainItem from "../blocks/items/MainItem";

const Study = () => {

    const STUDY_URL = '/study/get?level=main'
    const EXTRA_STUDY_URL = '/study/get?level=extra'

    const [extraStudy, setExtaStudy] = useState([])
    const [study, setStudy] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(STUDY_URL);
                setStudy(response.data);
                const extra__response = await axios.get(EXTRA_STUDY_URL);
                setExtaStudy(extra__response.data);
            } catch (error) {
                console.error(error);
            }
        };
        
        fetchData();
    }, []);

    return (
            <>
                <Header content='ОБУЧЕНИЕ' />
                <div className="content">
                    <div className="book">
                        <div className="leftPage">
                            <h2>Основные курсы</h2>
                            {study.length === 0 && <p><i>Пока нет доступных курсов</i></p> }
                            {study.map( (item, index) => 
                                <MainItem data={item} key={index} />
                            )}
                        </div>
                        <div className="rightPage">
                            <h2>Дополнительные курсы</h2>
                            {extraStudy.length === 0 && <p><i>Пока нет доступных курсов</i></p> }
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