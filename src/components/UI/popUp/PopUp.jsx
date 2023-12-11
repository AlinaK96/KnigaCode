
import React from 'react';
import './PopUp.css'

import Button from '../button/Button';

const PopUp = ({active, setActive, children, popUpTitle}) => {
    return (
        <div className={ active ? 'modal active' : 'modal'} onClick={ () => setActive(false)} >
            
            <div className={ active ? 'modal__content active' : 'modal__content'} onClick={ e => e.stopPropagation()} >
                <div className='modal__header'>
                    <h3>{popUpTitle}</h3>
                    <Button className='customBtn' onClick={ () => setActive(false)}>
                        <span>
                            <svg width="11" height="10" viewBox="0 0 11 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0.219461 10L4.55746 4.312L4.50346 5.86L0.345461 0.315999H3.49546L6.12346 3.934L4.93546 3.97L7.65346 0.315999H10.6415L6.46546 5.806V4.294L10.7855 10H7.59946L4.84546 6.148L6.01546 6.31L3.27946 10H0.219461Z" fill="#3C1C0F"/>
                            </svg>
                    </span>
                    </Button>
                </div>

                <div className='modal__frame'>
                    {children}
                </div>
                
            </div>

        </div>
    );
}

export default PopUp;
