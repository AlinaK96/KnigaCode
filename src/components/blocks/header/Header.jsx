import React from 'react';
import { NavLink } from 'react-router-dom';

import Logo from './book.svg'
import User from './user.svg'
import CustomLink from '../../UI/customLink/customLink';



const Header = () => {

    const headerLinks = [
        {id: '/author', title: 'Об авторе', link: '/author'},
        {id: '/method', title: 'О методе', link: '/method'},
        {id: '/best', title: 'Доска почёта', link: '/best'},
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
              <img src={Logo} alt="главная" title='Главная' />
            </NavLink>

            {headerLinks.map((link) =>
              <CustomLink link={link}  key={link.id}></CustomLink> 
            )}

            <NavLink to='/home'> 
              <img src={User} alt="Профиль" title='Профиль' />
              <span style={{visibility:'hidden'}}>Профиль</span>
            </NavLink>
        </div>
    );
}

export default Header;
