import React from 'react'


const ExtraConsultItem = ({data}) => {
    return (
        <div>
            <h2>{data.title}</h2>
            <p>{data.description}</p>
            <i><a href={data.link} target='blank'>Перейти на сайт курса</a></i>
            <p>Стоиомсть: {data.price}p.</p>
        </div>
    );
}

export default ExtraConsultItem;
