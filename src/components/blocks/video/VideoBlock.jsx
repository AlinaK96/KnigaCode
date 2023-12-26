import React from "react"

const VideoBlock = ({video}) => {

    const url = `https://www.youtube.com/embed/${video.URL}`; 

        return (
            <div style={{width: '100%'}}>
                <h3 style={{textAlign: 'center'}} >{video.title}</h3> 
                <div>
                <iframe style={{float: 'left', margin: '10px'}} width="450" height="300" src={url} frameBorder="0" allowFullScreen></iframe>
                <p>{video.description} </p>
                </div>
            </div>
        )
};

export default VideoBlock;