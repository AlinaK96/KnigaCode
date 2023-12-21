import React from 'react';
import Header from '../blocks/header/Header';
import Footer from '../blocks/footer/Footer';
import InfoHead from '../UI/infoHead/infoHead';


const Archive = () => {


    return (
        <div className='Archive'>
            <Header />
            <div className="content">
                <InfoHead content='Альманах' />
                альманах
            </div>
            <Footer />
        </div>
    );
}

export default Archive;
