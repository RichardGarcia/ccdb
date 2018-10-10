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
  padding: 10px;
`
const MainContentContainer = styled.div `
padding: 20px;
font-size: 1em;
`
const checkFirstVisit = () => {
  let ccDashData = localStorage.getItem('ccDdData');
  if (!ccDashData) {
    return {
      firstVisit: true,
      activePage: 'settings'
    }
  }
  return {

  }
}

class App extends Component {

  state = {
    activePage: 'dashboard',
    ...checkFirstVisit()
  }

  displayDashboard = () => this.state.activePage === 'dashboard'
  displaySettings = () => this.state.activePage === 'settings'
  firstVisitMessage = () => {
    if (this.state.firstVisit) {
      return (<h3>Welcome to CcDb Settings page. Please select your favorite coins. (max 5)</h3>)
    }
  }

  confirmFavorites = () => {
    localStorage.setItem('ccDdData','test')
    this.setState ({
      firstVisit: false,
      activePage: 'dashboard'
    })
  }

  settingsContent = () => {
    return (
      <div>
        {this.firstVisitMessage()}
        <button onClick={this.confirmFavorites}>
          Confirm fav coins
        </button>
      </div>
    )
  }

  render() {
    return (
      <MainContainer>
        <NavContainer>
          <LogoContainer>
            CcDb - Cryptocurrency Dashboard
          </LogoContainer>
          {!this.state.firstVisit &&
          <>
            <NavLink onClick={() => { this.setState({ activePage: 'dashboard' }) }} active={this.displayDashboard()}>
              Dashboard
            </NavLink>

            <NavLink onClick={() => { this.setState({ activePage: 'settings' }) }} active={this.displaySettings()}>
              Settings
            </NavLink>
          </>
          }
        </NavContainer>
        <MainContentContainer>
          <h2>{this.state.activePage}</h2>
          {this.displaySettings() && this.settingsContent()}

        </MainContentContainer>
      </MainContainer>
    )
  }
}

export default App;
