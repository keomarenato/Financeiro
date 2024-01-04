import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  *::-webkit-scrollbar {
        width: 22px;
        height: 22px;
        border-radius: 9999px;
    }

  *::-webkit-scrollbar-corner {
      background-color: transparent;  
  }

  *::-webkit-scrollbar-thumb {
      width: 6px;
      background-color: transparent;
      border-radius: 80px;
      box-shadow: inset 0 0 0px 6px ${(props) => props.theme['green-300']};
      border: solid 10px transparent;
  }

  :root {
    font-size: 62.5%;
  }

  :focus {
    outline: none;
    box-shadow: 0 0 0 2px ${props => props.theme['green-500']};
  }

  body {
    background: ${props => props.theme['gray-800']};
    color: ${props => props.theme['gray-100']};
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    font: 400 1.6rem Roboto, sans-serif;
  }
`