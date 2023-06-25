import React from 'react';

const TotalPrice = ({ totalPrice }) => {
  return (
    <div className="total-price">
      <h3>Total Price: ${totalPrice.toFixed(2)}</h3>
    </div>
  );
};

export default TotalPrice;
