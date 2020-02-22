/* eslint-disable no-unused-vars */
import React, {useState} from 'react'
import styled from 'styled-components'

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
`

const Form = () => {
    const [mydata, setData] = useState({
        cardNumber: '',
        cardName: '',
        Month: 0,
        Year: 0,
        CVV: ''
    })
    
    const handleInputChange = (event) => {
        console.log(event.target.value)
        setData({
            ...mydata,
            [event.target.name] : event.target.value
        })
        console.log(mydata)
    }

    return (
    <FormComponent>
        <CardInput 
        type="text" 
        name="cardNumber" 
        id="cardNumber" 
        placeholder="Card Number"
        onKeyUp={handleInputChange}
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