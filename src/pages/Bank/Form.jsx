import React from 'react';
import { reduxForm, Field } from 'redux-form';

import LabelInput from 'components/LabelInput';

import { required, name, number } from 'utils/validators';
import { showErrorToast } from 'utils/error';

const BankForm = ({ handleForm, handleSubmit, valid, onSubmit }) => (
  <div className="bank__form container">
    <div className="card">
      <div className="card-body">
        <form onSubmit={handleSubmit(onSubmit)} noValidate autoComplete="off">
          <Field
            component={LabelInput}
            id="inputAccountBankName"
            name="bankName"
            label="Nome do banco"
            placeholder="Digite o nome do banco"
            validate={[required, name]}
            invalidFeedback="Nome inválido"
          />
          <Field
            component={LabelInput}
            id="inputAccountAgency"
            name="agency"
            type="number"
            min={0}
            label="Número da agência"
            placeholder="Digite o número da agência"
            validate={[required, number]}
            invalidFeedback="Apenas números inteiros e positivos"
          />
          <Field
            component={LabelInput}
            id="inputAccountNumber"
            name="number"
            type="number"
            min={0}
            label="Número da conta"
            placeholder="Digite o número da conta"
            validate={[required, number]}
            invalidFeedback="Apenas números inteiros e positivos"
          />
          <Field
            component={LabelInput}
            id="inputAccountDigit"
            name="digit"
            type="number"
            min={0}
            label="Dígito da conta"
            placeholder="Digite o dígito da conta"
            validate={[required, number]}
            invalidFeedback="Apenas números inteiros e positivos"
          />
          <hr />
          <div className="bank__form__btn-group">
            <button
              onClick={handleForm}
              className="btn btn-danger"
              title="Cancelar cadastro"
            >
              Cancelar
            </button>
            <button
              type="submit"
              onClick={() => {
                if (!valid) showErrorToast(400);
              }}
              className="btn btn-primary"
              title="Adicionar conta"
            >
              Adicionar
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
);

export default reduxForm({
  form: 'bankForm'
})(BankForm);
