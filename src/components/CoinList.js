import React from 'react'
import styled from 'styled-components'

import {subtleBoxShadow, lightBlueBackground, greenBoxShadow} from '../styles/Style'

const CoinGrid = styled.div `
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 15px;
`
const CoinTile = styled.div `
  padding: 15px;
  ${subtleBoxShadow}
  ${lightBlueBackground}
  &:hover {
    cursor: pointer;
    ${greenBoxShadow}
  }
`

export default function(){
  return (
    <CoinGrid>
      {Object.keys(this.state.coinList).slice(0,100).map(
        coin =>
        <CoinTile>
          <div><img style={{height: '50px'}} src={`https://www.cryptocompare.com/${this.state.coinList[coin].ImageUrl}`} alt={coin} /></div>
          <div>{this.state.coinList[coin].CoinName}</div>
          <div>{this.state.coinList[coin].Symbol}</div>
        </CoinTile>
      )}
    </CoinGrid>
  )
}