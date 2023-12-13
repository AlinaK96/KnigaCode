import React from 'react';
import classes from './support.module.css'

const SupportItem = (props) => {
    return (
        <div>
            {props.item.question}
            {props.item.answer}
        </div>
    );
}

export default SupportItem;
