import http from './http';
import qs from 'qs';

const { REACT_APP_AUTH_KEY: AUTH_KEY } = process.env;

function getToken() {
  const token = localStorage.getItem(AUTH_KEY);
  return token && JSON.parse(token);
}

function saveToken(token) {
  localStorage.setItem(AUTH_KEY, JSON.stringify(token));
}

function deleteToken() {
  localStorage.removeItem(AUTH_KEY);
}

export function initAuthInterceptor(instance) {
  instance.interceptors.request.use(
    config => {
      let token = getToken();
      if (token) config.headers.Authorization = token;
      return config;
    },
    err => {
      return Promise.reject(err);
    }
  );
}

export async function signin(user) {
  const response = await http.post(
    '/login',
    qs.stringify({
      username: user.email,
      password: user.password
    }),
    {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    }
  );
  saveToken(response.headers.authorization);
  return validateAuthentication();
}

export async function signup(user) {
  await http.post('/register', user);
  return signin(user);
}

export async function signout() {
  deleteToken();
}

export async function validateAuthentication() {
  const token = getToken();
  if (!token) return false;

  const { data: user } = await http.get('/me');
  if (!user) deleteToken();

  return user;
}
