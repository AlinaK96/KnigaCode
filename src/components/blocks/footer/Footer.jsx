import React from 'react';
import CustomLink from '../../UI/customLink/customLink';

const Footer = () => {

    const footerLinks = [
        {id: 'feedback', title: 'Отзывы', link: '/feedback'},
        {id: 'contacts', title: 'Контакты', link: '/contacts'},
        {id: 'video', title: 'Видео', link: '/video'},
        {id: 'stars', title: 'Картотека', link: '/stars'},
        {id: 'book', title: 'Книга', link: '/book'},
        {id: 'support', title: 'Поддержка', link: '/support'},
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
