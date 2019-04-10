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
