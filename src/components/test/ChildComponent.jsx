import React, { useState } from 'react';

function ChildComponent({ handleOptionChange, option }) {
  const [selectedOption, setSelectedOption] = useState('');

  const handleChange = (event) => {
    const option = event.target.value;
    setSelectedOption(option);
    handleOptionChange(option);
  };

  return (
    <div>

        <select value={selectedOption} onChange={handleChange}>
            {option.map((item) => 
                <option value={item.category}>{item.category}</option>
            )}

        </select>    
    
    </div>
  );
}

export default ChildComponent;