import PropTypes from 'prop-types';
import {
  TransactionTable,
  TransTableHead,
  TransTableData,
} from './TransactionHistory.styled';

export const TransactionHistory = ({ items }) => {
  return (
    <TransactionTable>
      <TransTableHead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </TransTableHead>

      <tbody>
        {items.map(event => (
          <tr key={event.id}>
            <TransTableData>{event.type}</TransTableData>
            <TransTableData>{event.amount}</TransTableData>
            <TransTableData>{event.currency}</TransTableData>
          </tr>
        ))}
      </tbody>
    </TransactionTable>
  );
};

TransactionHistory.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.number.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};
