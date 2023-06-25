import React from 'react';
import ChocolateItem from './ChocolateItem';

const Chocolates = ({ chocolateData, selectedChocolates, onSelect }) => {
  const isSelected = (chocolateId) => {
    return selectedChocolates.includes(chocolateId);
  };

  return (
    <div className="chocolates">
      {chocolateData.map((chocolate) => (
        <ChocolateItem
          key={chocolate.id}
          chocolate={chocolate}
          isSelected={isSelected(chocolate.id)}
          onSelect={onSelect}
        />
      ))}
    </div>
  );
};

export default Chocolates;
