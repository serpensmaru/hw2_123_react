import { useState } from 'react';
import DropdownList from './DropdownList';

export default function Dropdown({ options, preSelectedOption }) {
  const [view, setView] = useState('');

  function handleDropdownClick() {
    setView(prevState => prevState === 'open' ? '' : 'open');
  }

  return (
    <div className={`dropdown-wrapper ${view}`}>
      <button
        className="btn"
        onClick={handleDropdownClick}
      >
        <span>Account Settings</span>
        <i className="material-icons">public</i>
      </button>

      <DropdownList
        items={options}
        preSelectedOption={preSelectedOption}
      />
    </div>
  );
}
