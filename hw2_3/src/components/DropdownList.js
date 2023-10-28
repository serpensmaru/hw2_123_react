import { useState } from 'react';
import DropdownItem from "./DropdownItem";

export default function DropdownList({ items, preSelectedOption }) {
  const [selectedOption, selectOption] = useState(preSelectedOption);

  return (
    <ul data-id="dropdown" className="dropdown">
      {items.map((item, index) => {

        return (
          <DropdownItem
            key={`${index}${item}`}
            item={item}
            handleItemClick={() => selectOption(item)}
            style={{ color: item === selectedOption ? '#5380f7' : ''}}
          />
        );
      })}
    </ul>
  );
}
