import React, { useState } from 'react';
import Chocolates from './components/Chocolates';
import QuantitySelector from './components/QuantitySelector';
import TotalPrice from './components/TotalPrice';

const chocolateData = [
  { id: 1, name: 'Chocolate 1', price: 2.99 },
  { id: 2, name: 'Chocolate 2', price: 3.99 },
  { id: 3, name: 'Chocolate 3', price: 4.99 },
  { id: 4, name: 'Chocolate 4', price: 5.99 },
  { id: 5, name: 'Chocolate 5', price: 6.99 },
  { id: 6, name: 'Chocolate 6', price: 7.99 },
  { id: 7, name: 'Chocolate 7', price: 8.99 },
  { id: 8, name: 'Chocolate 8', price: 9.99 },
  
];

const App = () => {
  const [selectedChocolates, setSelectedChocolates] = useState([]);
  const [quantities, setQuantities] = useState({});

  const handleSelect = (chocolateId) => {
    if (isSelected(chocolateId)) {
      setSelectedChocolates(selectedChocolates.filter((id) => id !== chocolateId));
      setQuantities({ ...quantities, [chocolateId]: 1 });
    } else {
      setSelectedChocolates([...selectedChocolates, chocolateId]);
    }
  };

  const isSelected = (chocolateId) => {
    return selectedChocolates.includes(chocolateId);
  };

  const handleQuantityChange = (chocolateId, quantity) => {
    setQuantities({ ...quantities, [chocolateId]: quantity });
  };

  const calculateTotalPrice = () => {
    let totalPrice = 0;
    selectedChocolates.forEach((chocolateId) => {
      const chocolate = chocolateData.find((chocolate) => chocolate.id === chocolateId);
      const quantity = quantities[chocolateId] || 1;
      totalPrice += chocolate.price * quantity;
    });
    return totalPrice;
  };

  return (
    <div className="app">
      <h2>Custom Chocolate Bundle</h2>
      <Chocolates
        chocolateData={chocolateData}
        selectedChocolates={selectedChocolates}
        onSelect={handleSelect}
      />
      {selectedChocolates.map((chocolateId) => (
        <QuantitySelector
          key={chocolateId}
          quantity={quantities[chocolateId] || 1}
          onChange={(quantity) => handleQuantityChange(chocolateId, quantity)}
        />
      ))}
      <TotalPrice totalPrice={calculateTotalPrice()} />
    </div>
  );
};

export default App;
