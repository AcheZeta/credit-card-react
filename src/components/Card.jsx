/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import styled from 'styled-components'

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
    font-size: 15px;
`
const CardInformation = styled.div`
    font-size: 20px;
`
const CardNumber = styled.div`
    display: flex;
    justify-content: center;
    padding: 10%;
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
    const [cardState, setProfileState] = useState(props);
    // console.log(cardState, setProfileState)

    useEffect(() => {
        setProfileState(props);
    }, [props]);

    return (
        <CreditasCard>
            <CreditasCardLogo src="https://loremipsum.io/assets/images/wasai-logo.png" alt="Logo">
            </CreditasCardLogo>
            <CardNumber>{cardState.cardNumber}</CardNumber>
            <CardInfo>
                <CardInfoSection>
                    <CardInfoLabel>Card Holder</CardInfoLabel>
                    <CardInformation>{cardState.cardName}</CardInformation>
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
