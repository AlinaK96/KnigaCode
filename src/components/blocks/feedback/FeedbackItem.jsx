import React from 'react';


const FeedbackItem = (props) => {
    return (
        <div >
            <h3>{props.item.username}</h3>
            <p>{props.item.data}</p> 
        </div>
    );
}

export default FeedbackItem;
