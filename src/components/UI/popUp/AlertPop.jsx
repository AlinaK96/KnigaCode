import React, { useState, useEffect } from 'react';
import './PopUp.css'
import Button from '../button/Button';

const Popup = () => {
    const [showPopup, setShowPopup] = useState(false);
    
    useEffect(() => {
        const lastPopupTime = localStorage.getItem('lastPopupTime');
        const currentTime = new Date().getTime();
        const oneHour = 60 * 60 * 1000;

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
                            <h3>Заголовок</h3>
                            <p>Текст уведомления</p>
                        </div>
                    </div>

                </div>
            )}
        </>
    );
};

export default Popup;