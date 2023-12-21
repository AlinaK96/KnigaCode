import React from "react"

const VideoBlock = ({video}) => {

    return (
        <>
            <div>
                <h3>{video.title}</h3> 
                <div>
                    <iframe  src="https://www.youtube.com/embed/${video.url}" />
                    {video.description} 
                </div>
            </div>
        </>
    )
};

export default VideoBlock;
