import './TransactionHistory.css';
import PropTypes from 'prop-types';


// const TransactionItem = ({ id, type, amount, currency }) => {
//     return (
//      <tr key={id}>
//         <td>{type}</td>
//         <td>{amount}</td>
//         <td>{currency}</td>
//      </tr>
//     )
// }

const TransactionHistory = ({
    items}) => {
    return (
        <table className="TransactionHistory">
            <thead>
                <tr>
                    <th>Type</th>
                    <th>Amount</th>
                    <th>Currency</th>
                </tr>
            </thead>
            <tbody>
                {items.map(item => (
                <tr key={item.id}>
                  <td>{item.type}</td>
                  <td>{item.amount}</td>
                  <td>{item.currency}</td>
                </tr>
                    
                ))}
            </tbody>
      </table>
    );
}


TransactionHistory.protoType = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            type: PropTypes.string.isRequired,
            amount: PropTypes.number.isRequired,
            currency: PropTypes.string.isRequired,
        }),
    ),
}
       

export default TransactionHistory; 