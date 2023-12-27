import React from 'react';
import { NavLink } from 'react-router-dom';

import CustomLink from '../../UI/customLink/customLink';
import InfoHead from '../../UI/infoHead/infoHead';

const Header = ({content}) => {

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
      <nav>
        <div className='header'>
            <NavLink to='/'> 
              <img src='/img/svg/book.svg' alt="главная" title='Главная' />
            </NavLink>

            {headerLinks.map((link) =>
              <CustomLink link={link}  key={link.id}></CustomLink> 
            )}

            <NavLink to='/profile'> 
              <img src='/img/svg/user.svg' alt="Профиль" title='Профиль' />
              <span style={{visibility:'hidden'}}>Профиль</span>
            </NavLink>
          </div>

          <InfoHead content={content} />
        </nav>
    );
}

export default Header;
