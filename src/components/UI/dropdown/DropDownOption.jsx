import React from 'react';

const DropDownOption = (props) => {
    return (
        <option value={props.value}>{props.option}</option>
    );
}

export default DropDownOption;
