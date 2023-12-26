import React from 'react';
import { NavLink } from 'react-router-dom';

import Logo from './book.svg'
import User from './user.svg'
import CustomLink from '../../UI/customLink/customLink';

const Header = () => {

    const headerLinks = [
      {id: '/author', title: 'О системе', link: '/author'},
      {id: '/calculate', title: 'Калькулятор', link: '/'},
      {id: '/match', title: 'Совместимость', link: '/match'},
      {id: '/plot', title: 'Сценарии', link: '/plot'},
      {id: '/name', title: 'Подбор имени', link: '/name'},
      {id: '/forecast', title: 'Карта дня', link: '/forecast'},
      {id: '/archive', title: 'Картотека', link: '/archive'},
    ]

    return (
        <div className='header'>
            <NavLink to='/'> 
              <img src={Logo} alt="главная" title='Главная' />
            </NavLink>

            {headerLinks.map((link) =>
              <CustomLink link={link}  key={link.id}></CustomLink> 
            )}

            <NavLink to='/profile'> 
              <img src={User} alt="Профиль" title='Профиль' />
              <span style={{visibility:'hidden'}}>Профиль</span>
            </NavLink>
        </div>
    );
}

export default Header;
