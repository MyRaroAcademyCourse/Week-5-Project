import './style.css';

interface propsTypes {
  title: string;
  logo: string;
  value: number;
}

const Card = ({ title, logo, value }: propsTypes) => {
    const [integers, cents] = value.toFixed(2).split('.');

  return (
    <div className="card">
      <div className="card-logo-title">
        <p className="card-title">{title}</p>
        <img className="card-logo" src={logo} alt="logo" />
      </div>
      <div>
        <span className="integers">{value ? `R$ ${integers},` : 'R$ 00,'}</span>
        <span className="cents">{value ? cents : '00'}</span>
      </div>
    </div>
  );
};

export default Card;
