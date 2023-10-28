export default function DropdownItem({ item, handleItemClick, style }) {
  return (
    <li>
      <a
        href="#0"
        onClick={handleItemClick}
        style={style}
      >
        {item}
      </a>
    </li>
  );
}
