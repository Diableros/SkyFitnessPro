import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 16px;
  }

  body {
    color: #000;
    font-family: 'Stratos';
    font-size: 1.5rem;
    line-height: 2rem;
  }

  #root {
    min-height: 100vh;
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
  }
`

export default GlobalStyle
