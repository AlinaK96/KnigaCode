import React from 'react'

import Collapse from '../../UI/collapse/Collapse';

const MainItem = ({data}) => {
    return (
        <div style={{width: '100%'}} >
            <h2>{data.title}</h2>
            <p>{data.description}</p>
            <p>Стоимость: {data.price}p.</p>
            <Collapse toggle__text='Подробнее' >
                <p>Video</p>
                <i><a href={data.link} target='blank'>Перейти на сайт</a></i>
            </Collapse>
        </div>
    );
}

export default MainItem;
