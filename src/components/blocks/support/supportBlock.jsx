import React from 'react';
import classes from './support.module.css'

const SupportItem = (props) => {
    return (
        <div className={classes.support_block}>
            <h3>{props.item.question}</h3>
            <p>{props.item.answer}</p>
        </div>
    );
}

export default SupportItem;
