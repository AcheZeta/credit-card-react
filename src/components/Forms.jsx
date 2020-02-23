/* eslint-disable no-unused-vars */
import React, {useState} from 'react'
import styled from 'styled-components'
import Card from '../components/Card'

const FormComponent = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-column-gap: 2rem;
  grid-row-gap: 0.5em;
  justify-items: center;
  padding: 1%;
`
const CardInput = styled.input`
    width: 100%;
    padding: .75rem;
    border: .0625em solid #ddd;
    border-radius: 15px;
    font-size: 20px;
    text-transform: uppercase;
    :focus {
    border: 2px solid #00e67c;
  }
`

const Form = () => {
    const [state, setState] = useState({
        cardNumber: 'XXXX XXXX XXXX',
        cardName: 'Lorem Ipsum',
        Month: 'Month',
        Year: 'Year',
        CVV: 'CVV'
      });
    
    const handleInputChange = (event) => {
        setState({
            ...state,
            [event.target.name] : event.target.value
        })
    }

    return (
    <FormComponent>
        <Card {...state} />
        <CardInput 
        type="text" 
        name="cardNumber" 
        id="cardNumber" 
        placeholder="Card Number"
        pattern="[0-9]*"
        onChange={handleInputChange}
        />
        <CardInput 
        type="text" 
        name="cardName" 
        id="cardname" 
        placeholder="Card Name"
        onKeyUp={handleInputChange}
        />
        <CardInput 
        type="number" 
        name="Month" 
        id="month" 
        placeholder="Month"
        onKeyUp={handleInputChange}
        />
        <CardInput
        type="number" 
        name="Year" 
        id="year" 
        placeholder="Year" 
        onKeyUp={handleInputChange}
        />
        <CardInput 
        type="password" 
        name="CVV" 
        id="ccv" 
        placeholder="CCV"
        onKeyUp={handleInputChange}
        />
    </FormComponent>
    )
}

export default Form