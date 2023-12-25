import React from 'react'
import Collapse from '../../UI/collapse/Collapse';

const ConsultItem = ({data}) => {
    return (
        <div>
            <h2>{data.title}</h2>
            <p>{data.description}</p>
            <p>Стоиомсть: {data.price}p.</p>
            <Collapse toggle__text='Подробнее о курсе' >
                <p>Video</p>
                <i><a href={data.link} target='blank'>Перейти на сайт курса</a></i>
            </Collapse>
        </div>
    );
}

export default ConsultItem;
