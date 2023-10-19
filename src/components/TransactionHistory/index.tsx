import { FormDataType } from '../../types/formDataType';
import './style.css';

interface TransactionHistoryProps {
  newData: FormDataType[];
}

const TransactionHistory = ({ newData }: TransactionHistoryProps) => {
  return (
    <section className="trans-his-section">
      <main className="trans-his-main">
        <h1 className="trans-his-title">Histórico de transações</h1>
        <div className="table-container">
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
            <tbody className='trans-his-transactions'>
              {newData.map((tableRow: FormDataType, index) => {
                return (
                  <tr key={index} className="trans-his-rows">
                    <td>{tableRow.nome}</td>
                    <td>{tableRow.data.substring(0, 10).split('-').reverse().join('/')}</td>
                    <td>{tableRow.categoria}</td>
                    <td>{`R$ ${Number(tableRow.valor).toLocaleString('pt-BR', {
                      minimumFractionDigits: 2,
                      maximumFractionDigits: 2,
                    })}`}</td>
                    <td className={`trans-his-tipo-style ${tableRow.tipo === '+' ? 'plus' : 'minus'}`}>
                      {tableRow.tipo}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </main>
    </section>
  );
};

export default TransactionHistory;
