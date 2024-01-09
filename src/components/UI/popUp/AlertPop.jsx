import React, { useState, useEffect } from 'react';
import './PopUp.css'
import Button from '../button/Button';

const Popup = () => {
    const [showPopup, setShowPopup] = useState(false);

    const [title, setTitle] = useState('Заголовок');
    const [content, setContent] = useState('Текст уведомления');
    
    useEffect(() => {
        const lastPopupTime = localStorage.getItem('lastPopupTime');
        const currentTime = new Date().getTime();
        const oneHour = 86400 * 1000;

        if (!lastPopupTime || currentTime - lastPopupTime >= oneHour) {
            setShowPopup(true);
        }
    }, []);

    const handleCloseButtonClick = () => {
        setShowPopup(false);
        localStorage.setItem('lastPopupTime', new Date().getTime());
    };

    return (
        <>
            {showPopup && (
                <div className='popup' >
                    <Button 
                        className="closeButton"
                        onClick={handleCloseButtonClick}
                    >
                        <span>x</span>
                    </Button>
                    <div className='popupContent'>
                        <img src="/img/png/5.jpg" alt="Анонс" width='150' height='200' />
                        <div>
                            <h3>{title}</h3>
                            <p>{content}</p>
                        </div>
                    </div>

                </div>
            )}
        </>
    );
};

export default Popup;
