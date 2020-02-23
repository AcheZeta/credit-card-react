/* eslint-disable no-unused-vars */
import React, {useState} from 'react'
import Card from '../components/Card'

const [state, setState] = useState({
    cardNumber: 'XXX XXX XXX XXXX',
    cardName: '',
    Month: 0,
    Year: 0,
    CVV: ''
  });

  const handleChange = () => {
    setState({
      CardNumber: "",
      email: "vennila@gmail.com"
    });
  };

  return (
    <div className="App">
      <Card {...state} />
    </div>
  )

