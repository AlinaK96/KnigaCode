import React from 'react';
import './Input.css'

const Input = ({type, id, name, placeholder, title, disabled, onChange, value,className, required}) => {
    return (
        <input
            type={type}
            name={name}
            id={id}
            placeholder={placeholder}
            onChange={onChange}
            title={title}
            disabled={disabled}
            value={value}
            className={className}
            required={required}

        />
    );
}

export default Input;
