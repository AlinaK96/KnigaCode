import React from 'react';
import classes from './infoHead.module.css'

const InfoHead = ({content}) => {
    return (
        <div className={classes.info__header}>
            {content}
        </div>
    );
}

export default InfoHead;
