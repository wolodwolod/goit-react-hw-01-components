import PropTypes from 'prop-types';
import { Table, TableHead, TableItem } from './TransactionHistory.styled.jsx';


export const TransactionHistory = ({ items }) => {

items.defaultProps = {
      id: String(Math.round((Math.random() * (1000 - 1)))),
      type: "Unknown",
      amount: "Unknown",
      currency: "Unknown"
}; 

    return (
        <Table>
            <thead>
                <TableHead>
                    <th>Type</th>
                    <th>Amount</th>
                    <th>Currency</th>
                </TableHead>
            </thead>

            <tbody>
                {items.map(({ id, type, amount, currency }) => (
                    <TableItem key={id}>
                        <td>{type}</td>
                        <td>{amount}</td>
                        <td>{currency}</td>
                    </TableItem>))}
            </tbody>
          
        </Table>)
}

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      type: PropTypes.string,
      amount: PropTypes.string,
      currency: PropTypes.string,
    })
  ),
};