import React from 'react';
import classes from './Input.css'

const Checkbox = ({value}) => {
    return (
        <label className='labelType'>
            <input type="checkbox" className='checkbox' value={value} />
                {value}
            <span className='custom__checkbox'></span>

        </label>
    );
}

export default Checkbox;
