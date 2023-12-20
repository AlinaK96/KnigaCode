import React from 'react';
import CustomLink from '../../UI/customLink/customLink';
import { NavLink } from 'react-router-dom';


const Footer = () => {

    const isAdmin = true

    const footerLinks = [
        {id: '/consultaion', title: 'Заказать консультацию', link: '/consultaion'},
        {id: '/study', title: 'Обучение', link: '/study'},
        {id: 'book', title: 'Книга', link: '/book'},
        {id: 'stars', title: 'Картотека', link: '/stars'},
        {id: 'video', title: 'Видео', link: '/video'},
        {id: 'feedback', title: 'Отзывы', link: '/feedback'},
        {id: 'contacts', title: 'Контакты', link: '/contacts'},
        {id: 'support', title: 'Поддержка', link: '/support'},
    ]

    return (
        <div className='footer'>
            {footerLinks.map((link) =>
                <CustomLink link={link}  key={link.id}></CustomLink> 
            )}

            {isAdmin &&
            <NavLink to='/edit'> 
                <span>Редактировать страницы</span>
            </NavLink>}

        </div>
    );
}

export default Footer;
