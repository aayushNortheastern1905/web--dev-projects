import React from 'react';
import Paypal from '../PayPal/PayPal';

const OrderConfirmation = ({ word }) => {
  
  return (
    <div>
      <Paypal price={word}/>
    </div>
  );
}

export default OrderConfirmation;
