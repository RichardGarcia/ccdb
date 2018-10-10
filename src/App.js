import React, { Component } from 'react'
import styled from 'styled-components'

import AppBar from '../src/components/AppBar'

import './App.css';

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
        {AppBar.call(this)}
        <MainContentContainer>
          <h2>{this.state.activePage}</h2>
          {this.displaySettings() && this.settingsContent()}

        </MainContentContainer>
      </MainContainer>
    )
  }
}

export default App;
