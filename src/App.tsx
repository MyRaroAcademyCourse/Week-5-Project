import { useState } from 'react';
import Header from './components/Header/index.tsx';
import Dash from './components/Dash/index.tsx';
import TransactionHistory from './components/TransactionHistory/index.tsx';
import Footer from './components/Footer/index.tsx';

function App() {
  const [newData, setNewData] = useState({
    nome: '',
    data: '',
    categoria: '',
    valor: 0,
    tipo: '',
  });
  const [entranceValue, setEntranceValue] = useState(0);
  const [debitValue, setDebitValue] = useState(0);
  const [balance, setBalance] = useState(0);
  const [data, setData] = useState([
    {
      nome: 'Venda de celular antigo',
      data: '01/08/2023',
      categoria: 'Renda extra',
      valor: 1853.12,
      tipo: '+',
    },
    {
      nome: 'Ida ao cinema',
      data: '05/08/2023',
      categoria: 'Lazer',
      valor: 82.53,
      tipo: '-',
    },
    {
      nome: 'Compras do mês',
      data: '07/08/2023',
      categoria: 'Alimentação',
      valor: 1853.12,
      tipo: '-',
    },
  ]);

  if (newData.tipo === '+' && newData.valor > 0) {
    setEntranceValue((prev) => prev + newData.valor);
    setBalance((prev) => prev + newData.valor);
  } else if (newData.tipo === 'debit' && newData.valor !== 0) {
    setDebitValue((prev) => prev + newData.valor);
    setBalance((prev) => prev - newData.valor);
  }

  return (
    <>
      <Header />
      <Dash newValue={215.78} valueType="tbd" />
      <TransactionHistory newData={data} />
      <Footer />
    </>
  );
}

export default App;
