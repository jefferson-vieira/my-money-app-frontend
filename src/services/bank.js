import http from 'utils/http';

const endpoint = '/banking-accounts';

export async function getBanks() {
  return http.get(endpoint);
}

export async function addBank(bank) {
  return http.post(endpoint, bank);
}

export async function deleteBank(bankId) {
  return http.delete(`${endpoint}/${bankId}`);
}

export async function getSummary() {
  return http.get(`${endpoint}/summary`);
}

export async function getSummaryByBank(bankId) {
  return http.get(`${endpoint}/${bankId}/summary`).then(resp => resp.data);
}
