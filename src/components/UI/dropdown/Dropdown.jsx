import React, { useState } from 'react';
import './DropDown.css'

function Dropdown({ handleOptionChange, option }) {
  const [selectedOption, setSelectedOption] = useState('');

  const handleChange = (event) => {
    const option = event.target.value;

    const selectedOption = event.target.options[event.target.selectedIndex];
    const dataName = selectedOption.getAttribute('data-name');

    setSelectedOption(option);
    handleOptionChange(option, dataName);
  };

  return (
    <div>
        <select value={selectedOption} onChange={handleChange}>
            {option.map((item, index) => 
              <option key={index} value={item.value} data-name={item.name} >{item.title}</option>
            )}
        </select>    
    
    </div>
  );
}

export default Dropdown;