import React from 'react'


const ExtraItem = ({data}) => {
    return (
        <div style={{width: '100%'}}>
            <h2>{data.title}</h2>
            <p>{data.description}</p>
            <i><a href={data.link} target='blank'>Перейти на сайт</a></i>
            <p>Стоимость: {data.price}p.</p>
        </div>
    );
}

export default ExtraItem;
