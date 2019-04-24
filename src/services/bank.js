import http from 'utils/http';

const URL = '/banking-accounts';

export async function getBanks() {
  return http.get(URL);
}

export async function addBank(bank) {
  return http.post(URL, bank);
}

export async function editBank({ id, ...bank }) {
  return http.put(`${URL}/${id}`, bank);
}

export async function deleteBank(bankId) {
  return http.delete(`${URL}/${bankId}`);
}

export async function getSummary() {
  return http.get(`${URL}/summary`);
}

export async function getSummaryByBank(bankId) {
  return http.get(`${URL}/${bankId}/summary`);
}

export async function getBanksWithSummary() {
  const { data: banks } = await getBanks();
  return Promise.all(
    banks.map(bank =>
      getSummaryByBank(bank.id).then(resp => ({ ...bank, summary: resp.data }))
    )
  );
}
