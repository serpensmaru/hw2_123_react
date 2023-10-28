import './App.css';
import items from './data/items';
import Dropdown from './components/Dropdown';

function App() {
  const preSelectedOption = 'Profile Information';

  return (
    <div className="container">
      <Dropdown
        options={items}
        preSelectedOption={preSelectedOption}
      />
    </div>
  );
}

export default App;
