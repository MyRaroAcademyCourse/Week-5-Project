import './style.css';

const Header = () => {
  return (
    <section className="header">
      <div className="logo-title">
        <img src="src/assets/logo.svg" alt="logo" />
        <p className="title">Raro Finanças</p>
      </div>
      <div className="user">
        <div className="user-data">
          <p className="nome">Samantha Freitas</p>
          <p className="email">sam.freitas@example.com</p>
        </div>
        <img src="src/assets/avatar.svg" alt="avatar" />
      </div>
    </section>
  );
};

export default Header;
