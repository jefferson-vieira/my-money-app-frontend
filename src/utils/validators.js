import moment from 'moment';

export const required = (value = '') => !value.replace(/\s+/, ' ').trim();

export const name = (value = '') => !/^[a-zA-ZÀ-ÿ ]+$/.test(value);

export const letters = (value = '') => !/^[a-zA-Z]+$/.test(value);

export const number = (value = '') => !/^\d+$/.test(value) || Number(value) < 0;

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
  let valid = (result * 10) % 11;
  if (valid === 10) valid = 0;
  if (valid !== +validate.charAt(0)) return false;
  for (let c of cpf) {
    result += +c;
  }
  result += +validate.charAt(0) * 2;
  valid = (result * 10) % 11;
  if (valid === 10) valid = 0;
  return valid === +validate.charAt(1);
};

export const tel = (value = '') => value.length !== 10;

export const cel = (value = '') =>
  value.length !== 11 || +value.charAt(2) !== 9;

export const postalCode = (value = '') => !/^[\d]{5}[-]{1}[\d]{3}$/.test(value);
