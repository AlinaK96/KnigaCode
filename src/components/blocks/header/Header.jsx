import React from 'react';
import { NavLink } from 'react-router-dom';

import Logo from './book.svg'
import CustomLink from '../../UI/customLink/customLink';
import Button from '../../UI/button/Button';


const Header = () => {


    const headerLinks = [
        {id: '/author', title: 'Об авторе', link: '/author'},
        {id: '/calculate', title: 'Калькулятор', link: '/calculate'},
        {id: '/match', title: 'Совместимость', link: '/match'},
        {id: '/study', title: 'Обучение', link: '/study'},
        {id: '/consultation', title: 'Заказать консультацию', link: '/consultation'},
        {id: '/day', title: 'Расчёт на день', link: '/day'},
        //{id: '/profile', title: 'Профиль', link: '/profile'}
    ]



    return (
        <div className='header'>
            <NavLink to='/'> 
                <img src={Logo} alt="главная" />
            </NavLink>

            {headerLinks.map((link) =>
                <CustomLink link={link}  key={link.id}></CustomLink> 
             )}

             <Button>
                <span>Войти / Зарегистрироваться</span>
             </Button>


        </div>
    );
}

export default Header;
