import * as auth from 'services/auth';

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

export async function login(user) {
  const response = await auth.login(user);
  saveToken(response.headers.authorization);
  return validateAuthentication();
}

export async function register(user) {
  return auth.register(user);
}

export async function logout() {
  deleteToken();
}

export async function validateAuthentication() {
  const token = getToken();
  if (!token) return false;

  const { data: user } = await auth.getLoggedUser();
  if (!user) deleteToken();

  return user;
}
