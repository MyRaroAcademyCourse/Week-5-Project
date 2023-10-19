import Card from '../Card';
import './style.css';
import plusIcon from '../../assets/plusIcon.svg';
import trendingUp from '../../assets/trendingUp.svg';
import trendingDown from '../../assets/trendingDown.svg';
import dollarSign from '../../assets/dollarSign.svg';

interface propsTypes {
  onEntriesSum: number;
  onDebitValues: number;
  onBalanceChange: number;
  onAddTransaction: (e: boolean) => void;
}

const Dash = ({ onEntriesSum, onDebitValues, onBalanceChange, onAddTransaction }: propsTypes) => {
  const handleClick = () => {
    onAddTransaction(true);
  };

  const cardsList = [
    {
      title: 'Entradas',
      logo: trendingUp,
      value: onEntriesSum,
    },
    {
      title: 'Saídas',
      logo: trendingDown,
      value: onDebitValues,
    },
    {
      title: 'Saldo',
      logo: dollarSign,
      value: onBalanceChange,
    },
  ];

  return (
    <section className='dash'>
      {cardsList.map((card, index) => (
        <Card key={index} title={card.title} logo={card.logo} value={card.value} />
      ))}

      <div className='btn-transacao' onClick={handleClick}>
        <img src={plusIcon} alt='botao transacao' />
        <p className='btn-text'>TRANSAÇÃO</p>
      </div>
    </section>
  );
};

export default Dash;
