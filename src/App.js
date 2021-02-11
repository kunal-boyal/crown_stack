import { useState, useEffect } from 'react';
import axios from 'axios';
import { Navbar,Button} from 'react-bootstrap';

import Dropdown from './components/Dropdown'
import Table from './components/Table'
import './App.css';


function App() {

  const [currencies, setCurrencies] = useState([])
  const [exchangeRates, setExchangeRates] = useState({})
  const [base,setBase] = useState('')

  const getCurrencies = async () => {
    try {
      const response = await axios.get('http://localhost:5000/getCurrencies')
      setCurrencies(response.data.data)
    } catch (error) {
      console.log(error.message)
    }
  }

  const getExchangeRates = async (value) => {
    try {
      console.log(value)
      const symbols = "&symbols=INR,AUD,CAD,JPY" 
      let baseUrl = `https://api.exchangeratesapi.io/latest?base=${base}`
      if(value) baseUrl = baseUrl + symbols
      const response = await axios.get(baseUrl)
      setExchangeRates(response.data)
    } catch (error) {
      console.log(error.message)
    }
  }

  const setBaseCurrency = (e) => {
    setBase(e.target.value)
  }

  useEffect(() => {
    getCurrencies()
  }, [])

  return (
    <div className="App">
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home" style={{ margin: 'auto', fontSize: '30px' }}>
          Exchange Rates
        </Navbar.Brand>
      </Navbar>
      <h3 style={{ marginTop: '30px' }}>Please select base currency from the dropdown</h3>
      <Dropdown title="Select Country" currencies={currencies} clicked={setBaseCurrency} />
      <Button onClick={() => getExchangeRates(true)} variant="dark" style={{ margin: '30px', }}>Exchange Rates of listed currencies</Button>
      <Button onClick={() => getExchangeRates(false)} variant="dark" style={{ margin: '30px' }}>Exchange Rates of all currencies</Button>
      {exchangeRates.hasOwnProperty('base') ? <Table rates={exchangeRates} /> : null}
    </div>

  );
}

export default App;
