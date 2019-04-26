import http from 'utils/http';
import qs from 'qs';

export async function login({ email, password }) {
  const body = qs.stringify({
    username: email,
    password: password
  });

  const headers = {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  };

  return http.post('/login', body, headers);
}

export async function register(user) {
  return http.post('/register', user);
}

export async function getLoggedUser() {
  return http.get('/me');
}

export function changePassword(email) {
  return http.get(`/forget-password/request/${email}`);
}

export function recoveryPassword(data) {
  return http.put('/forget-password/confirm', data);
}

export function activeAccount(token) {
  return http.get(`/registration-confirm/${token}`);
}
