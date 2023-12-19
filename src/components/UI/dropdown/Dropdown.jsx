
import React, { useState } from "react";
import "./DropDown.css";

import DropDownOption from './DropDownOption';

export default function Dropdown({dropDownOption, updated}) {

  const [selected, setSelected] = useState('Миссия');

  let updatedText
  
  const handleChange = event => {
    setSelected(event.target.value);
    updatedText = event.target.value
  };

  return (
    <div>
    <select value={selected} onChange={(e) => {
                                        handleChange(e)
                                        updated(updatedText)
                                        }}
      >
        {dropDownOption.map(option => (
          <DropDownOption  option={option.category} key={option.category} value={option.category}/>  
        ))}
      </select>
    </div>
    
  );
}