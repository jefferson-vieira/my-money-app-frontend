import http from 'utils/http';

const URL = '/payment-cycles';

export function getPaymentCycles() {
  return http.get(URL);
}

export function getPaymentCycleById(id) {
  return http.get(`${URL}/${id}`);
}
