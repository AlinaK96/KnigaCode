import React from 'react';
import { NavLink } from 'react-router-dom';

import Logo from './book.svg'
import User from './user.svg'
import CustomLink from '../../UI/customLink/customLink';



const Header = () => {

    const headerLinks = [
        {id: '/author', title: 'Об авторе', link: '/author'},
        {id: '/calculate', title: 'Калькулятор', link: '/'},
        {id: '/match', title: 'Совместимость', link: '/match'},
        {id: '/study', title: 'Обучение', link: '/study'},
        {id: '/consultaion', title: 'Заказать консультацию', link: '/consultaion'},
        {id: '/parents', title: 'Дети-родители', link: '/parents'},
        {id: '/forecast', title: 'Прогноз', link: '/forecast'},
    ]



    return (
        <div className='header'>
            <NavLink to='/'> 
              <img src={Logo} alt="главная" />
            </NavLink>

            {headerLinks.map((link) =>
              <CustomLink link={link}  key={link.id}></CustomLink> 
            )}

            <NavLink to='/register' className='link'>Войти / Зарегистрироваться</NavLink>

            <NavLink to='/home' className='link'>
              <img src={User} alt="Профиль" />
              Профиль
            </NavLink>
        </div>
    );
}

export default Header;
