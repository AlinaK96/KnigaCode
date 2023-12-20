import React from "react"

const VideoBlock = ({video}) => {

    return (
        <>
            <div>
                <h3>{video.title}</h3> 
                <div>
                    {/* <iframe  src="https://www.youtube.com/embed/${video.url}" /> */}
{/* <iframe width="1280" height="720" src="https://www.youtube.com/embed/MST9Q-tq0Po" title="ДИЛАРА против TENDERLYBAE! Кто КРУЧЕ ПРИГОТОВИТ ПЕЛЬМЕНИ? **Родители в Шоке**" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}

                    {video.description} 
                </div>
            </div>
        </>
    )
};

export default VideoBlock;
