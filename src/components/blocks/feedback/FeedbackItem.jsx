import React from 'react'
import classes from '../support/support.module.css'


const FeedbackItem = (props) => {
    return (
        <div className={classes.support_block}>
            <p>{props.item.data}</p> 
            <span>({props.item.username})</span>
        </div>
    );
}

export default FeedbackItem;
