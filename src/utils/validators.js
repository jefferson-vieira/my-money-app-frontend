import moment from 'moment';

export const required = (value = '') => !value.replace(/\s+/, ' ').trim();

export const name = (value = '') => !/^[a-zA-ZÀ-ÿ ]+$/.test(value);

export const letters = (value = '') => !/^[a-zA-Z]+$/.test(value);

export const number = value =>
  !value || isNaN(Number(value)) || Number(value) < 0 || !/^\d*$/.test(value);

export const email = (value = '') =>
  !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value);

export const password = (value = '') =>
  value.length < 8 ||
  value.length > 16 ||
  !/[^\W\d]+/.test(value) ||
  !/\W+/.test(value) ||
  !/\d+/.test(value) ||
  !/^[^\s]+$/.test(value);

export const matchField = formField => (value = '', allValues) =>
  value !== allValues[formField];

export const beforeOrEqual = (value = '') =>
  !moment(value, 'YYYY-MM-DD').isSameOrBefore(new Date());

export const cpf = (value = '') =>
  value.length !== 11 || !(new Set(value).size > 1) || !isValidCpf(value);

const isValidCpf = value => {
  const validate = value.substring(value.length - 2);
  let cpf = value.substring(0, value.length - 2);
  let result = 0;
  let i = 10;
  for (let c of cpf) {
    result += c * i--;
  }
  result = (result * 10) % 11;
  if (result === 10) result = 0;
  if (result !== +validate.charAt(0)) return false;
  cpf = value.substring(0, value.length - 1);
  result = 0;
  i = 11;
  for (let c of cpf) {
    result += c * i--;
  }
  result = (result * 10) % 11;
  if (result === 10) result = 0;
  return result === +validate.charAt(1);
};

export const tel = (value = '') => value.length !== 10 || !isNaN(Number(value));

export const cel = (value = '') =>
  value.length !== 11 || +value.charAt(2) !== 9 || isNaN(Number(value));

export const cep = (value = '') => !/^[\d]{5}[-]{1}[\d]{3}$/.test(value);
