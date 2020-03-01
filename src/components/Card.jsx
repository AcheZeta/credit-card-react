/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import styled from 'styled-components'

// Create Styles With StyleComponets
const CreditasCard = styled.div`
    display: inline-block;
    width: 340px;
    height: 210px;
    background: linear-gradient(48deg,#17a19d,#00e67c);
    border-radius: 15px;
    box-shadow: 0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22);
    padding: 5px;
    :hover {
    transform: rotateY(180deg);
}
`
const CreditasCardLogo = styled.img`
    width: 50px;
`
const CardInfoSection = styled.div`
    font-size: 20px;
`
const CardInfoLabel = styled.div`
    font-size: 5px;
`
const CardInformation = styled.div`
    font-size: 15px;
`
const CardNumber = styled.span`
    display: flex;
    justify-content: center;
    padding: 1%;
    margin: 10%;
`
const CardInfo = styled.div`
    display: flex;
    justify-content: space-between;
    align-content: flex-end;
    font-size: 15px;
    padding: 15px;
    bottom: 5px;
`

const Card = props => {
    const [cardState, setCardState] = useState(props);
    
    //Get the CardNumber to the State to show company and give it a credit card formmat.
    let cardNumbers = cardState.cardNumber
    
    let cardType = (cardNumbers) => {
        if (cardNumbers.charAt(0) === '4') {
            return 'https://seeklogo.net/wp-content/uploads/2016/11/visa-logo-preview.png';
        }
        if (cardNumbers.charAt(0) === '5') {
            return 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Mastercard-logo.svg/1280px-Mastercard-logo.svg.png';
        }
        if (cardNumbers.charAt(0) === '3') {
            return 'https://i.ya-webdesign.com/images/american-express-logo-png-9.png';
        }
        else return 'https://loremipsum.io/assets/images/wasai-logo.png'
    }

    const formattedCardNum = (cardNumber) => {
        const newFormat = cardNumber.split('').reduce((card, currentNumber, index) => {
            if (index > 3 && index < 12)
                currentNumber = '*'
            card = `${card}${currentNumber}`
            return card
        }, '')
        let formattedCardNumber = `${newFormat.slice(0, 4)} ${newFormat.slice(4, 8)}  ${newFormat.slice(4, 8)}  ${newFormat.slice(8, 12)}  ${newFormat.slice(12, 16)}`
        return formattedCardNumber
    }

    useEffect(() => {
        setCardState(props);
    }, [props]);

    return (
        <CreditasCard>
            <CreditasCardLogo src={cardType(cardNumbers)} alt="Logo"></CreditasCardLogo>
            <CardInfoSection>
                <CardNumber>{formattedCardNum(cardNumbers)}</CardNumber>
            </CardInfoSection>
            <CardInfo>
                <CardInfoSection>
                    <CardInfoLabel>Card Holder</CardInfoLabel>
                    <CardInformation>{cardState.cardName.toUpperCase()}</CardInformation>
                </CardInfoSection>
                <CardInfoSection>
                    <CardInfoLabel>Expires</CardInfoLabel>
                    <CardInformation>{cardState.Month}/{cardState.Year}</CardInformation>
                </CardInfoSection>
            </CardInfo>
        </CreditasCard >
    );
};

export default Card
