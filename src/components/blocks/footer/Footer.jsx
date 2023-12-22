import React from 'react';
import CustomLink from '../../UI/customLink/customLink';
import { NavLink } from 'react-router-dom';


const Footer = () => {

    const isAdmin = true
    const isStudent = true

    const footerLinks = [
        {id: 'consultaion', title: 'Консультация', link: '/consultaion'},
        {id: 'study', title: 'Обучение', link: '/study'},
        {id: 'book', title: 'Книга', link: '/book'},
        {id: 'archive', title: 'Альманах', link: '/archive'},
        {id: 'stars', title: 'Звёзды', link: '/stars'},
        {id: 'video', title: 'Видео', link: '/video'},
        //{id: 'feedback', title: 'Отзывы', link: '/feedback'},
        //{id: 'contacts', title: 'Контакты', link: '/contacts'},
        //{id: 'support', title: 'Поддержка', link: '/support'},
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

            {isAdmin &&
            <NavLink to='/edit' className='link'> 
                <span>Редактировать страницы</span>
            </NavLink>}


        </div>
    );
}

export default Footer;
