import React from "react"

const VideoBlock = ({video}) => {

    return (
        <>
            <div>
                <h3>{video.title}</h3> 
                <div>
                    {video.URL}
                    {video.description} 
                </div>
            </div>
        </>
    )
};

export default VideoBlock;
