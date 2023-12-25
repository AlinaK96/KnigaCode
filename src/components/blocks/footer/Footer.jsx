import React from 'react';
import CustomLink from '../../UI/customLink/customLink';
import { NavLink } from 'react-router-dom';


const Footer = () => {

    const isStudent = true

    const footerLinks = [
        {id: 'consultaion', title: 'Консультация', link: '/consultaion'},
        {id: 'study', title: 'Обучение', link: '/study'},
        {id: 'book', title: 'Книга', link: '/book'},
        {id: 'almanac', title: 'Альманах', link: '/almanac'},
        {id: 'stars', title: 'Звёзды', link: '/stars'},
        {id: 'video', title: 'Видео', link: '/video'},
    ]

    return (
        <div className='footer'>
            {footerLinks.map((link) =>
                <CustomLink link={link}  key={link.id}></CustomLink> 
            )}

            {isStudent &&
            <NavLink to='/edu' className='link'> 
                <span>Курсы</span>
            </NavLink>}


        </div>
    );
}

export default Footer;
