import http from 'utils/http';

const URL = '/payment-cycles';

export function getPaymentCycles(page = 0) {
  return http.get(`${URL}?page=${page}`);
}

export function getPaymentCycleById(id) {
  return http.get(`${URL}/${id}`);
}
