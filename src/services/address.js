import axios from 'axios';

export async function getAddress(cep) {
  const { data } = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
  if (data.erro) throw Error;
  return data;
}
