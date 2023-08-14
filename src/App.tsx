import { useState } from 'react';
import { Backdrop } from '@mui/material';
import Header from './components/Header/index.tsx';
import Dash from './components/Dash/index.tsx';
import TransactionHistory from './components/TransactionHistory/index.tsx';
import Footer from './components/Footer/index.tsx';
import NewTransactionForm from './components/NewTransactionForm/index.tsx';
import { FormDataType } from './components/NewTransactionForm/types/formDataType.tsx';

function App() {
  const [entranceValue, setEntranceValue] = useState<number>(1853.12);
  const [debitValue, setDebitValue] = useState<number>(-1935.65);
  const [balance, setBalance] = useState(-82.53);
  const [open, setOpen] = useState<boolean>(false);
  const [data, setData] = useState<FormDataType[]>([
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

  const handleFormOpen = (e: boolean) => {
    setOpen(e);
  };

  const handleNewData = (e: FormDataType) => {
    console.log(e);
    setData([...data, e]);
    if (e.tipo === '+') {
      console.log({entranceValue})
      console.log({e})
      setEntranceValue((prevEntranceValue) => (prevEntranceValue as number) + Number(e.valor));
      setBalance((prevBalance) => (prevBalance as number) + Number(e.valor));
    } else if (e.tipo === '-') {
      setDebitValue((prevDebitValue) => prevDebitValue - e.valor);
      setBalance((prevBalance) => prevBalance - e.valor);
    }
  };

  return (
    <>
      <Header />
      <Dash onEntriesSum={entranceValue} newValue={215.78} valueType="tbd" />
      <TransactionHistory newData={data} />
      <Footer />
      {open ? (
        <Backdrop open={open} onClick={() => setOpen(false)}>
          <NewTransactionForm onDataSubmit={handleNewData} onSetOpen={handleFormOpen} />
        </Backdrop>
      ) : null}
    </>
  );
}

export default App;
