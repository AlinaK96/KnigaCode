import React, { useState } from 'react';
import ChildComponent from './ChildComponent';

function ParentComponent() {
  const [selectedOption, setSelectedOption] = useState('');

  const role = [
    { category: 'Зарегистрированный пользователь', value: 'RegisteredUser' },
    { category: 'Незарегистрированный пользователь', value: 'notRegisteredUser' },
    { category: 'Студент', value: 'student' },
];

  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };

  return (
    <div>
      <h2>Выбранное значение: {selectedOption}</h2>
      <ChildComponent handleOptionChange={handleOptionChange} option={role} />
    </div>
  );
}

export default ParentComponent;