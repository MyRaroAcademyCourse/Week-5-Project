import { useState } from 'react';
import Header from './components/Header/index.tsx';
import Dash from './components/Dash/index.tsx';
import TransactionHistory from './components/TransactionHistory/index.tsx';
import Footer from './components/Footer/index.tsx';
import NewTransactionForm from './components/NewTransactionForm/index.tsx';
import { FormDataType } from './types/formDataType.tsx';

function App() {
  const [entranceValues, setEntranceValues] = useState<number>(1853.12);
  const [debitValues, setDebitValues] = useState<number>(1935.65);
  const [balance, setBalance] = useState<number>(-82.53);
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
  const handleFormClose = () => {
    setOpen(false);
  };
  const handleNewData = (e: FormDataType) => {
    setData((prevData) => [...prevData, e]);
    if (e.tipo === '+') {
      setEntranceValues((prevEntranceValue): number => prevEntranceValue + Number(e.valor));
      setBalance((prevBalance): number => prevBalance + Number(e.valor));
    } else if (e.tipo === '-') {
      setDebitValues((prevDebitValue): number => prevDebitValue + Number(e.valor));
      setBalance((prevBalance) => prevBalance - Number(e.valor));
    }
  };

  return (
    <>
      <main className='main-content'>
        <Header />
        <Dash
          onEntriesSum={entranceValues}
          onDebitValues={debitValues}
          onBalanceChange={balance}
          onAddTransaction={handleFormOpen}
        />
        <TransactionHistory newData={data} />
        <Footer />
      </main>
      {open ? <NewTransactionForm onDataSubmit={handleNewData} onSetOpen={open} onSetClose={handleFormClose} /> : null}
    </>
  );
}

export default App;
