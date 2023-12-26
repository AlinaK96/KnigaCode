import React from 'react'


const ExtraItem = ({data}) => {
    return (
        <div style={{width: '100%'}}>
            <h2>{data.title}</h2>
            <i><a href={data.link} target='blank' title='Подробнее' className='changed'>Перейти на сайт</a></i>
        </div>
    );
}

export default ExtraItem;
