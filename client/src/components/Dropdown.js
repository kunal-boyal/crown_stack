import { Form } from 'react-bootstrap';


const DropdownCountries = ({ title, currencies, clicked }) => {
    return (
        <Form.Control as="select" defaultValue="INR" style={{ width: '60%', margin: 'auto', marginTop: '20px' }} onChange={(e) => clicked(e)}>
            {currencies.map((currency) => < option key={currency.code} value={currency.code} > {currency.name} ({currency.code}) </option>)}
        </Form.Control>
    )
}

export default DropdownCountries