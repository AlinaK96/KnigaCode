import React from 'react';
import { NavLink } from 'react-router-dom';
import './customLink.css'

const CustomLink = ({link}) => {
    return (
        <NavLink to={link.link} className='link' > {link.title}</NavLink>
    );
}

export default CustomLink;
