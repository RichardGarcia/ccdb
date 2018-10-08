import React, { Component } from 'react'
import styled from 'styled-components'

import './App.css';

const CustomElement = styled.div `
  font-size: 30px;
`
const BlueElement = CustomElement.extend `

`


class App extends Component {
  render() {
    return (
      <React.Fragment>
        <CustomElement>
          <p>Welcome to CCDB</p>
        </CustomElement>
        <BlueElement>
          <p>Welcome to CCDB</p>
        </BlueElement>
      </React.Fragment>
    )
  }
}

export default App;
