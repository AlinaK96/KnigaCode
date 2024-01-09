import React, {useEffect, useState} from "react"
import axios from '../../api/axios';

import Header from "../blocks/header/Header";
import Footer from "../blocks/footer/Footer";

const Forecast = () => {

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
            <Header content='КАРТА ДНЯ' />
            <div className="content">
                {role === 'notAuth' &&
                    <div className='noAccess'>
                        <p>Для получения доступа необходимо приобрести курс или зарегистрироваться</p>
                        
                    </div>
                }
                    
                {role === 'AuthUser' &&
                    <div className='noAccess'>
                        <p>Для получения доступа к просчёту сценариев необходимо приобрести курс</p>

                        <div>
                        </div>
                    </div>
                }

                    {role === 'student' && 
                        <div>
                        </div>
                    }
            </div>
            <Footer />
        </>
    )
};

export default Forecast;
