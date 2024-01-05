import React, { useState, useEffect } from "react"
import axios from '../../api/axios';

import Header from "../blocks/header/Header";
import Footer from "../blocks/footer/Footer";

import ExtraItem from "../blocks/items/ExtraItem";
import MainItem from "../blocks/items/MainItem";

const Consultation = () => {

    const CONSULTATION_URL = '/consultation/get?level=main'
    const EXTRA_CONSULTATION_URL = '/consultation/get?level=extra'
    const [consultation, setConsultation] = useState([])
    const [extraConsultation, setExtaConsultation] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(CONSULTATION_URL);
                setConsultation(response.data);
                const extra__response = await axios.get(EXTRA_CONSULTATION_URL);
                setExtaConsultation(extra__response.data);
            } catch (error) {
                console.error(error);
            }
        };
        
        fetchData();
    }, []);

    return (
            <>
                <Header content='КОНСУЛЬТАЦИИ' />
                <div className="content">
                    <div className="book">
                        <div className="leftPage">
                            <h2>Основные</h2>
                            {consultation.length === 0 && <p><i>Пока нет доступных консультаций</i></p> }
                            {consultation.map( (item, index) => 
                                <MainItem data={item} key={index} />
                            )}
                        </div>
                        <div className="rightPage">
                            <h2>Дополнительные</h2>
                            {consultation.length === 0 && <p><i>Пока нет доступных консультаций</i></p> }
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
