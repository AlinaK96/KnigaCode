import React from "react";
import './Button.css'

const Button = ({ className, children, onClick, id, disabled }) => {

    return (

        <button className={className} onClick={onClick}  id={id} disabled={disabled} >
            {children}
        </button>
    )
}

export default Button