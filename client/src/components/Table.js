import { Table } from 'react-bootstrap';


const TableList = ({ rates }) => {
    const exchangeRates = rates.rates
    const rows = Object.keys(exchangeRates).map((keyName, i) => {
        return (
            <tr key={keyName}>
                <td>1 {rates.base}</td>
                <td>{exchangeRates[keyName]} {keyName}</td>
            </tr>
        )
    })

    return (
        <Table bordered hover style={{ width: '60%', margin: 'auto'}}>
            <thead>
                <tr>
                    <th>Base Currency</th>
                    <th>Exchange Rates</th>
                </tr>
            </thead>
            <tbody>
                {rows}
            </tbody>
        </Table>
    )
}

export default TableList