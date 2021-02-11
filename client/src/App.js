import { useState, useEffect } from 'react';
import axios from 'axios';
import { Navbar,Button} from 'react-bootstrap';

import Dropdown from './components/Dropdown'
import Table from './components/Table'
import Spinner from './components/Spinner'
import './App.css';


function App() {

  const [currencies, setCurrencies] = useState([])
  const [exchangeRates, setExchangeRates] = useState({})
  const [base, setBase] = useState('')
  const [loading,setLoading] = useState(false)
 
  const getCurrencies = async () => {
    try {
      const response = await axios.get('https://dry-eyrie-51816.herokuapp.com/getCurrencies')
      setCurrencies(response.data.data)
    } catch (error) {
      console.log(error.message)
    }
  }

  const getExchangeRates = async (value) => {
    try {
      setLoading(true)
      const symbols = "&symbols=INR,AUD,CAD,JPY" 
      let baseUrl = `https://api.exchangeratesapi.io/latest?base=${base}`
      if(value) baseUrl = baseUrl + symbols
      const response = await axios.get(baseUrl)
      setExchangeRates(response.data)
      setLoading(false)
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

  const table = loading ? <Spinner /> : <Table rates={exchangeRates} />

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
      {exchangeRates.hasOwnProperty('base') ? table : null}
    </div>

  );
}

export default App;
