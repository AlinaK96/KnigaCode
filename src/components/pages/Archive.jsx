import React from 'react';
import Header from '../blocks/header/Header';
import Footer from '../blocks/footer/Footer';
import InfoHead from '../UI/infoHead/infoHead';


const Archive = () => {


    return (
        <>
            <Header />
            <div className="content">
                <InfoHead content='Картотека' /> 
            </div>
            <Footer />
        </>
    );
}

export default Archive;
