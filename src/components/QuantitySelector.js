import React from 'react';

const QuantitySelector = ({ quantity, onChange }) => {
  const handleQuantityChange = (event) => {
    onChange(Number(event.target.value));
  };

  return (
    <div className="quantity-selector">
      <label htmlFor="quantity">Quantity:</label>
      <input
        type="number"
        id="quantity"
        min="1"
        value={quantity}
        onChange={handleQuantityChange}
      />
    </div>
  );
};

export default QuantitySelector;
