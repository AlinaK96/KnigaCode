import React from 'react'

const StarsItem = ({data}) => {
    return (
        <div>
            {data.number}
            {data.name}
        </div>
    );
}

export default StarsItem;
