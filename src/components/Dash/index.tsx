import { useState } from 'react';
import Card from './Card';
import './style.css';

interface propsTypes {
  newValue: number;
  valueType: string;
}

const Dash = ({ newValue, valueType }: propsTypes) => {
  const [entranceValue, setEntranceValue] = useState(0);
  const [debitValue, setDebitValue] = useState(0);
  const [balance, setBalance] = useState(0);

  if (valueType === 'entrance' && newValue > 0) {
    setEntranceValue((prev) => prev + newValue);
    setBalance((prev) => prev + newValue);
  } else if (valueType === 'debit' && newValue !== 0) {
    setDebitValue((prev) => prev + newValue);
    setBalance((prev) => prev - newValue);
  }
  
  return (
    <section className="dash">
      <Card title="Entradas" logo="src/assets/trendingUp.svg" value={entranceValue} />
      <Card title="Saídas" logo="src/assets/trendingDown.svg" value={debitValue} />
      <Card title="Saldo" logo="src/assets/dollarSign.svg" value={balance} />
      <div className="btn-transacao">
        <img src="src/assets/plusIcon.svg" alt="botao transacao" />
        <p className="btn-text">TRANSAÇÃO</p>
      </div>
    </section>
  );
};

export default Dash;
