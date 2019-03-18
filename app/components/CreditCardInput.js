import React from 'react';
import { CreditCardInput } from 'react-native-credit-card-input';

function CreditCard() {
  const onChange = form => console.log(form);
  return (
    <CreditCardInput onChange={onChange} placeholderColor="grey" inputStyle={{ color: 'green' }} />
  );
}

export default CreditCard;
