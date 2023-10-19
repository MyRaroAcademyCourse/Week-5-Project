import { useState } from 'react';
import { FormDataType } from '../../types/formDataType';
import { Backdrop } from '@mui/material';
import './style.css';
import trendingUpRadio from '../../assets/trendingUpRadio.svg'
import trendingDownRadio from '../../assets/trendingDownRadio.svg'
import check from '../../assets/check.svg'
import xIcon from '../../assets/x.svg'


interface NewTransactionFormProps {
  onSetOpen: boolean;
  onSetClose: (e: boolean) => void;
  onDataSubmit: (e: FormDataType) => void;
}

const NewTransactionForm = ({ onSetOpen, onSetClose, onDataSubmit }: NewTransactionFormProps) => {
  const [formData, setFormData] = useState<FormDataType>({
    nome: '',
    data: '',
    categoria: '',
    valor: 0,
    tipo: '+',
  });

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = event.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, tipo: event.target.value });
  };

  const handleSubmit = (event: React.FormEvent) => {
    onSetClose(false);
    event.preventDefault();
    onDataSubmit(formData);
  };


  return (
    <Backdrop open={onSetOpen} onClick={() => onSetClose(false)}>
      <div className="form-dialog" onClick={(e) => e.stopPropagation()}>
        <h1 className="form-title">Nova transação</h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor="nome">Nome</label>
          <input
            type="text"
            id="nome"
            value={formData.nome}
            onChange={handleInputChange}
            placeholder="Digite o nome da sua transação"
          />
          <label htmlFor="data">Data</label>
          <input
            type="date"
            id="data"
            value={formData.data}
            onChange={handleInputChange}
            placeholder="Selecione a data da transação"
          />
          <label htmlFor="categoria">Categoria</label>
          <input
            type="text"
            id="categoria"
            value={formData.categoria}
            onChange={handleInputChange}
            placeholder="Digite a categoria da sua transação"
          />
          <label htmlFor="valor">Valor</label>
          <input
            type="number"
            id="valor"
            value={formData.valor === 0 ? '' : formData.valor.toLocaleString('pt-BR')}
            onChange={handleInputChange}
            placeholder="Digite o valor da sua transação"
          />
          <label htmlFor="tipo">Tipo</label>
          <div className="form-radio-btns-area">
            <label className="form-radio-btn">
              <input type="radio" id="tipo" value="+" checked={formData.tipo === '+'} onChange={handleRadioChange} />
              <img className="form-btn-img" src={trendingUpRadio} />
              Entrada
            </label>
            <label className="form-radio-btn">
              <input type="radio" id="tipo" value="-" checked={formData.tipo === '-'} onChange={handleRadioChange} />
              <img className="form-btn-img" src={trendingDownRadio} />
              Saída
            </label>
          </div>
          <div className="form-btns">
            <button className="form-btn-cancel" onClick={() => onSetClose(false)}>
              <img src={xIcon} />
              Cancelar
            </button>
            <button className="form-btn-add" type="submit">
              <img src={check} />
              Adicionar
            </button>
          </div>
        </form>
      </div>
    </Backdrop>
  );
};

export default NewTransactionForm;
