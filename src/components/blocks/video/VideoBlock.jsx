import React from "react"

const VideoBlock = ({video}) => {

        return (
            <div style={{width: '100%'}}>
                <h3>{video.title}</h3> 
                <div>
                    {video.URL}
                    {video.description} 
                </div>
            </div>
        )
};

export default VideoBlock;
