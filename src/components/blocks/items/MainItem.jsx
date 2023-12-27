import React from 'react'

import Collapse from '../../UI/collapse/Collapse';

const MainItem = ({data}) => {

    const video__url = `https://www.youtube.com/embed/${data.videolink}`

    return (
        <div style={{width: '100%'}} >
            <h2>{data.title}</h2>
            <Collapse >
                <iframe style={{ margin: '10px'}} width="450" height="300" src={video__url} title={data.title} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                <p><i><a href={data.link} target='blank' className='changed'>Перейти на сайт</a></i></p>
            </Collapse>
        </div>
    );
}

export default MainItem;
