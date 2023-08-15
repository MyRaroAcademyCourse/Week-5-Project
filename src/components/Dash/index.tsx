import Card from '../Card';
import './style.css';

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
      logo: 'src/assets/trendingUp.svg',
      value: onEntriesSum,
    },
    {
      title: 'Saídas',
      logo: 'src/assets/trendingDown.svg',
      value: onDebitValues,
    },
    {
      title: 'Saldo',
      logo: 'src/assets/dollarSign.svg',
      value: onBalanceChange,
    },
  ];

  return (
    <section className="dash">
      {cardsList.map((card, index) => (
        <Card key={index} title={card.title} logo={card.logo} value={card.value} />
      ))}

      <div className="btn-transacao" onClick={handleClick}>
        <img src="src/assets/plusIcon.svg" alt="botao transacao" />
        <p className="btn-text">TRANSAÇÃO</p>
      </div>
    </section>
  );
};

export default Dash;
