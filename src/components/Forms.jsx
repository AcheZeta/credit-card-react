/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import styled from 'styled-components'
import Card from '../components/Card'

const FormComponent = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-column-gap: 2rem;
  grid-row-gap: 0.5em;
  justify-items: center;
  padding: 3%;
  background-color: white
`
const CardInput = styled.input`
    width: 100%;
    padding: .75rem;
    border: .0625em solid #ddd;
    border-radius: 15px;
    font-size: 20px;
    text-transform: uppercase;
    transition: border-bottom-color .25s ease-in;
    &:focus {
    border-color: #00e67c;
    }
`
const Cardselect = styled.select`
    width: 109%;
    background-color: white;
    padding: .75rem;
    border: .0625em solid #ddd;
    border-radius: 15px;
    font-size: 20px;
    text-transform: uppercase;
    color: gray;
    &:focus {
    border-color: #00e67c;
    }
`

const Form = () => {
    const [CardState, setState] = useState({
        cardNumber: '**** **** ****',
        cardName: 'Lorem Ipsum',
        Month: 'Month',
        Year: 'Year',
        CVV: 'CVV',
    });

    const handleInputChange = (event) => {
        setState({
            ...CardState,
            [event.target.name]: event.target.value
        })
    }

    return (
        <FormComponent>
            <Card {...CardState} />
            <CardInput
                type="tel"
                name="cardNumber"
                id="cardNumber"
                maxLength="16"
                placeholder="Card Number"
                onChange={handleInputChange}
            />
            <CardInput
                type="text"
                name="cardName"
                id="cardname"
                placeholder="Card Name"
                onKeyUp={handleInputChange}
            />
            <Cardselect name="Month" id="month" onChange={handleInputChange}>
                <option value="01">MONTH</option>
                <option value="01">01</option>
                <option value="02">02</option>
                <option value="03">03</option>
                <option value="04">04</option>
                <option value="05">05</option>
                <option value="06">06</option>
                <option value="07">07</option>
                <option value="08">08</option>
                <option value="09">09</option>
                <option value="10">10</option>
                <option value="11">11</option>
                <option value="12">12</option>
            </Cardselect>
            <Cardselect name="Year" id="year" onChange={handleInputChange}>
                <option value="02">YEAR</option>
                <option value="20">20</option>
                <option value="21">21</option>
                <option value="22">22</option>
                <option value="23">23</option>
                <option value="24">24</option>
                <option value="25">25</option>
                <option value="26">26</option>
                <option value="27">27</option>
                <option value="28">28</option>
                <option value="29">29</option>
                <option value="30">30</option>
            </Cardselect>
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