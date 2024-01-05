import React from 'react';

import CustomLink from '../../UI/customLink/customLink';
import { NavLink } from 'react-router-dom';

const Footer = () => {

    const footerLinks = [
        {id: 'consultaion', title: 'КОНСУЛЬТАЦИИ', link: '/consultaion'},
        {id: 'study', title: 'ОБУЧЕНИЕ', link: '/study'},
        {id: 'book', title: 'КНИГА', link: '/book'},
        {id: 'almanac', title: 'АЛЬМАНАХ', link: '/almanac'},
        {id: 'stars', title: 'ЗНАМЕНИТОСТИ', link: '/stars'},
        {id: 'video', title: 'ВИДЕО', link: '/video'},
        {id: 'edu', title: 'КУРСЫ', link: '/edu'},
    ]

    return (
        <div className='footer'>
            {footerLinks.map((link) =>
                <CustomLink link={link}  key={link.id}></CustomLink> 
            )}
        </div>
    );
}

export default Footer;
