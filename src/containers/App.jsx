/* eslint-disable no-unused-vars */
import React from 'react'
import { createGlobalStyle } from 'styled-components'
import Form from '../components/Forms'
import Card from '../components/Card'
import Main from '../components/Container'

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Lato', sans-serif;
    margin: 0;
    padding: 0;
    background: #d3e9fc;
  }
`
const App = () => (
    <Main>
      <GlobalStyle />
      <Card />
      <Form />
    </Main>
)

export default App
