import React, { Component } from 'react'
import styled from 'styled-components'

import './App.css';

const MainContainer = styled.div `
  display: grid;
  grid-template-columns: 75% auto auto;
  grid-column-gap: 20px;
  padding: 20px;
`

const LogoContainer = styled.div `
  font-size: 2.5em;
`
const NavLink = styled.div `
  font-size: 1.5em;
  align-self: center;
  justify-self: center;
`

class App extends Component {
  render() {
    return (
      <MainContainer>
        <LogoContainer>
          Welcome to CcDb
        </LogoContainer>
        <NavLink>
          Dashboard
        </NavLink>
        <NavLink>
          Settings
        </NavLink>
      </MainContainer>
    )
  }
}

export default App;
