import React, { useState } from 'react';
import PropTypes from 'prop-types';
import data from '../data';
import IconSwitch from './IconSwitch';
import CardsView from './CardsView';
import ListView from './ListView';

function Store(props) {
  const [products] = useState(data);
  const [view, setView] = useState('view_list');

  const onSwitch = (icon) => {
    icon === 'view_list' ? setView('view_module') : setView('view_list');
    // console.log(icon);
  };

  return (
    <>
      <IconSwitch icon={view} onSwitch={onSwitch} />
      {view === 'view_list' ? (
        <CardsView cards={products} />
      ) : (
        <ListView items={products} />
      )}
    </>
  );
}

Store.propTypes = {
  products: PropTypes.array,
  view: PropTypes.string,
  onSwitch: PropTypes.func,
};

export default Store;
