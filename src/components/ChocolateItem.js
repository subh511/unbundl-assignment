import React from 'react';

const ChocolateItem = ({ chocolate, isSelected, onSelect }) => {
  const handleCheckboxChange = () => {
    onSelect(chocolate.id);
  };

  return (
    <div className="chocolate-item">
      <input
        type="checkbox"
        checked={isSelected}
        onChange={handleCheckboxChange}
      />
      <img src={chocolate.image} alt={chocolate.name} />
      <span>{chocolate.name}</span>
      <span>${chocolate.price.toFixed(2)}</span>
    </div>
  );
};

export default ChocolateItem;
