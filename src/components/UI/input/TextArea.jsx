import React from 'react';
import './Input.css'


const TextArea = ({id, placeholder, disabled, onChange}) => {
    return (
        <textarea  id={id} placeholder={placeholder} 
                    disabled={disabled}
                    onChange={onChange}
                    spellCheck='true' autoCorrect='on' autoFocus='off' 
                    cols="30" rows="10"
        >          
        </textarea>
    );
}

export default TextArea;
