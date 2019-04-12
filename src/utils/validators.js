export const required = (value = '') => !value.replace(/\s+/, ' ').trim();

export const name = (value = '') => !/^[a-zA-ZÀ-ÿ ]+$/.test(value);

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

export const matchPassword = (value = '', allValues) =>
  value !== allValues['password'];

export const matchField = formField => (value = '', allValues) =>
  value !== allValues[formField];
