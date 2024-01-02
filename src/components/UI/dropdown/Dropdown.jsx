import React, { useState } from 'react';
import './DropDown.css'

function Dropdown({ handleOptionChange, option }) {
  const [selectedOption, setSelectedOption] = useState('');

  const handleChange = (event) => {
    const option = event.target.value;
    setSelectedOption(option);
    handleOptionChange(option);
  };

  return (
    <div>
        <select value={selectedOption} onChange={handleChange}>
            {option.map((item, index) => 
              <option key={index} value={item.value}>{item.title}</option>
            )}
        </select>    
    
    </div>
  );
}

export default Dropdown;