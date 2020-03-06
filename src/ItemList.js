import React from 'react';
import PropTypes from 'prop-types';

export default function ItemList(props) {
  const { items } = props;
  return (
    <div>
      <p className="items">Items</p>
      <ol className="item-list">
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ol>
    </div>
  );
}

ItemList.propTypes = {
  items: PropTypes.array.isRequired,
};
