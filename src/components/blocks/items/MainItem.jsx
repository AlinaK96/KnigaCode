import React from 'react'

import Collapse from '../../UI/collapse/Collapse';

const MainItem = ({data}) => {
    return (
        <div style={{width: '100%'}} >
            <h2>{data.title}</h2>
            <Collapse toggle__text='Подробнее' >
                <p>{data.videolink}</p>
                <i><a href={data.link} target='blank' className='changed'>Перейти на сайт</a></i>
            </Collapse>
        </div>
    );
}

export default MainItem;
