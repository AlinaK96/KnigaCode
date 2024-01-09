import React from 'react';
import { NavLink } from 'react-router-dom';

import CustomLink from '../../UI/customLink/customLink';
import InfoHead from '../../UI/infoHead/infoHead';

const Header = ({content}) => {

    const headerLinks = [
      {id: '/author', title: '  О СИСТЕМЕ', link: '/author'},
      {id: '/calculate', title: 'КАЛЬКУЛЯТОР', link: '/'},
      {id: '/match', title: 'СОВМЕСТИМОСТЬ', link: '/match'},
      {id: '/plot', title: 'СЦЕНАРИИ', link: '/plot'},
      {id: '/forecast', title: 'КАРТА ДНЯ', link: '/forecast'},
      {id: '/archive', title: 'КАРТОТЕКА', link: '/archive'},
      {id: '/profile', title: ' ПРОФИЛЬ', link: '/profile'},
    ]

    return (
      <nav>
        <div className='header'>
            {headerLinks.map((link) =>
              <CustomLink link={link}  key={link.id}></CustomLink> 
            )}
          </div>
          <InfoHead content={content} />
        </nav>
    );
}

export default Header;
