import {Table,Title,String,Tbody} from '../styled/Table'



const TransactionHistory = ({ transactions }) => {
    return (
<Table >
  <thead>
    <tr>
      <Title>Type</Title>
      <Title>Amount</Title>
      <Title>Currency</Title>
    </tr>
  </thead>
<tbody >
            {transactions.map(transaction=>(
                <Tbody key={transaction
                .id}>
      <String>{transaction.type}</String>
      <String>{transaction.amount}</String>
      <String>{transaction.currency}</String>
    </Tbody>
  ))
          }
          </tbody>
</Table>
    );
}

export default TransactionHistory;