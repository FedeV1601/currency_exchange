import React, { useEffect, useState } from 'react';
import CurrencyRow from '../CurrencyRow/CurrencyRow'
import styled from 'styled-components'
import Imagen from '../../img/imagenFondo.jpg'
import {useHistory} from 'react-router'

const BASE_URL = 'https://api.frankfurter.app/latest?';

export const HomePage = () => {
 // ----------------------------ATENCION componentes para EL BOTON ------------------------
//const [input, setInput] = React.useState();
  const history = useHistory();


  const [currencyOptions, setCurrencyOptions] = useState([])
  const [fromCurrency, setFromCurrency] = useState()
  const [toCurrency, setToCurrency] = useState()
  const [exchangeRate, setExchangeRate] = useState()
  const [amount, setAmount] = useState(1)
  const [amountInFromCurrency, setAmountInFromCurrency] = useState(true)

  let toAmount, fromAmount
  if (amountInFromCurrency) {
    fromAmount = amount
    toAmount = amount * exchangeRate
  } else {
    toAmount = amount
    fromAmount = amount / exchangeRate
  }

  useEffect(() => {
    fetch(BASE_URL)
      .then(res => res.json())
      .then(data => {
        const firstCurrency = Object.keys(data.rates)[6]
        setCurrencyOptions([data.base, ...Object.keys(data.rates)])
        setFromCurrency(data.base)
        setToCurrency(firstCurrency)
        setExchangeRate(data.rates[firstCurrency])
      })
  }, [])

  useEffect(() => {
    if (fromCurrency === toCurrency && fromCurrency != null) {
      setExchangeRate(1);
    } else if (fromCurrency != null && toCurrency != null) {
      fetch(`${BASE_URL}&from=${fromCurrency}&to=${toCurrency}`)
        .then(response => response.json())
        .then(data => setExchangeRate(data.rates[toCurrency]));
    }
  }, [fromCurrency, toCurrency]);

   
  function handleFromAmountChange(e) {
    setAmount(e.target.value)
    setAmountInFromCurrency(true)
  }

  function handleToAmountChange(e) {
    setAmount(e.target.value)
    setAmountInFromCurrency(false)
  }

  // ----------------------------ATENCION CON EL BOTON ------------------------
  function handleSearchClick(){
    
      history.replace("/credits");
  }

  return (
    <Home>
       <Button onClick={handleSearchClick}>Creditos</Button>
      <Title> Conversor de divisas</Title>
      <SubTitle>¡Convertir!</SubTitle>
      <CurrencyRow 
        currencyOptions={currencyOptions}
        selectedCurrency={fromCurrency}
        onChangeCurrency={e => setFromCurrency(e.target.value)}
        onChangeAmount={handleFromAmountChange}
        amount={fromAmount}
      />
      <Equals>=</Equals>
      <CurrencyRow 
        currencyOptions={currencyOptions}
        selectedCurrency={toCurrency}
        onChangeCurrency={e => setToCurrency(e.target.value)}
        onChangeAmount={handleToAmountChange}
        amount={toAmount}
      />
    </Home>

);
}
    const Home = styled.div`
          margin: 0;
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
          min-height: 100vh;
          background-image: url(${Imagen});
          background-repeat: no-repeat;
  
    `;

    const Title = styled.h1`
          font-size: 4rem;
          text-decoration: underline;   
          color: white;
             `;

      const SubTitle = styled.h2`
      font-size: 4rem;
      margin-bottom: 40px;
      color: white;
 `;

    const Equals = styled.div`
          font-weight: bold;
          font-size: 5rem;
          color: white;
    `;

    const Button = styled.button`
    margin-top: 10px;
    font-size: 24px;
    border-radius: 4px;
    padding: 4px;
    font-weight: bold;
    background-color: green;
        `;
