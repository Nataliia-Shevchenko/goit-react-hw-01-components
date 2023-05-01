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
        {items.map(item => (
          <tr key={item.id}>
            <TransTableData>{item.type}</TransTableData>
            <TransTableData>{item.amount}</TransTableData>
            <TransTableData>{item.currency}</TransTableData>
          </tr>
        ))}
      </tbody>
    </TransactionTable>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};
