import './style.css';

const TransactionHistory = ({newData}) => {
  
  return (
    <section className="trans-his-section">
      <main className="trans-his-main">
        <h1 className="trans-his-title">Histórico de transações</h1>
        <table className="trans-his-table">
          <thead>
            <tr>
              <th>Nome</th>
              <th>Data</th>
              <th>Categoria</th>
              <th>Valor</th>
              <th className="trans-his-tipo">Tipo</th>
            </tr>
          </thead>
          <tbody>
            {newData.map((tableRow) => {
              return (
                <tr className="trans-his-rows">
                  <td>{tableRow.nome}</td>
                  <td>{tableRow.data}</td>
                  <td>{tableRow.categoria}</td>
                  <td>{`R$ ${tableRow.valor.toLocaleString('pt-BR')}`}</td>
                  <td className={`trans-his-tipo-style ${tableRow.tipo === '+' ? 'plus' : 'minus'}`}>
                    {tableRow.tipo}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </main>
    </section>
  );
};

export default TransactionHistory;
