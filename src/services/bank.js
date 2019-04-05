import http from 'utils/http';

const endpoint = '/banking-accounts';

export async function getBanks() {
  return http.get(`${endpoint}/me`);
}

export async function addBank(bank) {
  return http.post(endpoint, bank);
}
