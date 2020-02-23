/* eslint-disable no-unused-vars */
import React from 'react'
import { createGlobalStyle } from 'styled-components'
import Form from '../components/Forms'
import Main from '../components/Container'

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Lato', sans-serif;
    margin: 0;
    padding: 0;
    background: #d3e9fc;
  }
`

const App = () => {

  return (
    <Main>
      <GlobalStyle />
      <Form />
    </Main>
  );
};

export default App
