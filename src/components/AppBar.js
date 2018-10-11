import React from 'react'
import styled, {css} from 'styled-components'

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

export default function() {
  console.log('from appbar.js', this.state)
  return (
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
  )
}