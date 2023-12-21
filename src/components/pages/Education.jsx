import React from 'react';
import Header from '../blocks/header/Header';
import Footer from '../blocks/footer/Footer';
import InfoHead from '../UI/infoHead/infoHead';


const Education = () => {


    return (
        <div className='Education'>
            <Header />
            <div className="content">
                <InfoHead content='Обучение' />
                обучение -только для студентов 
            </div>
            <Footer />
        </div>
    );
}

export default Education;
