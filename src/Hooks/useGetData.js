/* eslint-disable no-unused-vars */
import React, {useState} from 'react'

const useGetData = () => {
  const [cardState, setState] = useState({
    cardNumber: 'XXX XXX XXX XXXX',
    cardName: '',
    Month: 0,
    Year: 0,
    CVV: ''
  });

  return cardState;
};

export default useGetData
