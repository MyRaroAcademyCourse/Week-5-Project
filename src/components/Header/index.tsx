import './style.css';
import logo from '../../assets/logo.svg'
import avatar from '../../assets/avatar.svg'

const Header = () => {
  return (
    <header className="header">
      <div className="logo-title">
        <img src={logo} alt="logo" />
        <p className="title">Raro Finanças</p>
      </div>
      <div className="user">
        <div className="user-data">
          <p className="nome">Samantha Freitas</p>
          <p className="email">sam.freitas@example.com</p>
        </div>
        <img src={avatar} alt="avatar" />
      </div>
    </header>
  );
};

export default Header;
