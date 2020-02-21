/* eslint-disable no-unused-vars */
import React from 'react'
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Lato', sans-serif;
    margin: 0;
    padding: 0;
    background: #f5f5f5;
  }
`

const App = () => (
    <div>
      <h1>Hola</h1>
    </div>
  )

export default App
