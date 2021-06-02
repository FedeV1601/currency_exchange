import React from 'react'
import styled from 'styled-components'

export default function CurrencyRow(props) {
  const {
    currencyOptions,
    selectedCurrency,
    onChangeCurrency,
    onChangeAmount,
    amount
  } = props
  return (
    <Wrapper>
      <AmountBar type="number" value={amount} onChange={onChangeAmount} />
      <Currencies 
      key={Math.random()}
      value={selectedCurrency} onChange={onChangeCurrency}>
        {currencyOptions.map(option => (
          <option key={option} value={option}>{option}</option>
        ))}
      </Currencies>
    </Wrapper>
  )
}

const Wrapper = styled.div`
display: flex;
`;

const AmountBar = styled.input`
  border: 2px solid #333;
  border-radius: .3em;
  padding: .25rem;
  width: 10em;
`;

const Currencies = styled.select`
margin-left: .5rem;

`;
