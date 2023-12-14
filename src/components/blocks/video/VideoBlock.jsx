import React from "react"

const VideoBlock = (props) => {
    return (
        <>
            <div>
                 <h3>{props.item.title}</h3> 
                <div>
                    {/* <iframe  src="https://www.youtube.com/embed/${props.item.url}" /> */}
                     {props.item.description} 
                </div>
            </div>
        </>
    )
};

export default VideoBlock;
