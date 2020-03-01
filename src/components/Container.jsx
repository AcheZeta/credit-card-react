/* eslint-disable no-unused-vars */
import React from 'react'
import styled from 'styled-components'

const MainStyle = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-column-gap: 2rem;
  grid-row-gap: 0.5em;
  justify-items: center;
  margin: 10%;
`


const Main = ({ children }) => (
  <MainStyle>
      {children}
  </MainStyle>
)

export default Main
