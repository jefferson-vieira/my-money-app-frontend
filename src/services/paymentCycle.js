import http from 'utils/http';

const URL = '/payment-cycles';

export function getPaymentCycles(page = 0) {
  return http.get(`${URL}?page=${page}`);
}

export function getPaymentCycleById(id) {
  return http.get(`${URL}/${id}`);
}

export async function addPaymentCycle(paymentCycle) {
  return http.post(URL, paymentCycle);
}

export async function updatePaymentCycle(paymentCycle) {
  return http.put(`${URL}/${paymentCycle.id}`, paymentCycle);
}

export async function deletePaymentCycle(paymentCycleId) {
  return http.delete(`${URL}/${paymentCycleId}`);
}
