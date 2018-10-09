import React, { Component } from 'react'
import styled, {css} from 'styled-components'

import './App.css';

const NavContainer = styled.div `
  display: grid;
  grid-template-columns: 75% auto auto;
  grid-column-gap: 20px;
  padding: 20px;
`

const LogoContainer = styled.div `
  font-size: 2.5em;
`
const NavLink = styled.div `
  cursor: pointer;
  font-size: 1.5em;
  align-self: center;
  justify-self: center;
  ${props =>props.active && css`
    text-shadow: 0px 0px 60px #fff;
    color: blue;
  `}

`
const MainContainer = styled.div `
  border: 1px solid red;
`
const MainContentContainer = styled.div `
border: 1px solid red;
padding: 20px;
font-size: 1em;
`

class App extends Component {

  state = {
    activePageTitle: 'dashboard'
  }

  displayDashboard = () => this.state.activePageTitle === 'dashboard'
  displaySettings = () => this.state.activePageTitle === 'settings'

  render() {
    return (
      <MainContainer>
        <NavContainer>
          <LogoContainer>
            Welcome to CcDb
          </LogoContainer>
          <NavLink onClick={() => { this.setState({ activePageTitle: 'dashboard' }) }} active={this.displayDashboard()}>
            Dashboard
          </NavLink>
          <NavLink onClick={() => { this.setState({ activePageTitle: 'settings' }) }} active={this.displaySettings()}>
            Settings
          </NavLink>
        </NavContainer>
        <MainContentContainer>
          <h2>{this.state.activePageTitle}</h2>
        </MainContentContainer>
      </MainContainer>
    )
  }
}

export default App;
