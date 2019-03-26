import nock from 'nock';
import axios from 'axios';

import {
  initAuthInterceptor,
  signin,
  signup,
  signout,
  validateAuthentication
} from 'utils/auth';

const {
  REACT_APP_API_BASE_URL: API_BASE_URL,
  REACT_APP_AUTH_KEY: AUTH_KEY
} = process.env;

const oAuthToken = 'oAuthTokenMock';

const userMock = {
  username: 'test',
  password: 'test'
};

describe('Testing auth utils...', () => {
  beforeAll(() => {
    nock(API_BASE_URL)
      .persist()
      .post('/login')
      .reply(200, {}, { authorization: oAuthToken });

    nock(API_BASE_URL)
      .persist()
      .post('/register')
      .reply(201);

    nock(API_BASE_URL)
      .persist()
      .get('/users/me')
      .reply(200, userMock);
  });

  afterEach(() => {
    localStorage.removeItem(AUTH_KEY);
  });

  it('showld inject token', async () => {
    nock(API_BASE_URL)
      .persist()
      .get(/.*/)
      .reply(200);

    const http = axios.create();
    initAuthInterceptor(http);

    await http.get(API_BASE_URL).then(resp => {
      const requestToken = resp.config.headers.Authorization;
      expect(requestToken).toBeFalsy();
    });

    localStorage.setItem(AUTH_KEY, JSON.stringify(oAuthToken));

    await http.get(API_BASE_URL).then(resp => {
      const requestToken = resp.config.headers.Authorization;
      expect(requestToken).toEqual(oAuthToken);
    });
  });

  it('showld validate authentication', async () => {
    const user = await validateAuthentication();

    expect(user).toBeFalsy();
  });

  it('showld can do login', async () => {
    const user = await signin(userMock);

    expect(user).toEqual(userMock);
  });

  it('showld can do register', async () => {
    const user = await signup(userMock);

    expect(user).toEqual(userMock);
  });

  it('showld can do logout', async () => {
    localStorage.setItem(AUTH_KEY, JSON.stringify(oAuthToken));
    signout();
    const token = JSON.parse(localStorage.getItem(AUTH_KEY));
    expect(token).toBeFalsy();
  });

  it('showld validate authentication after auth', async () => {
    await signin(userMock);
    const userLogin = await validateAuthentication();
    expect(userLogin).toEqual(userMock);

    signout();

    await signup(userMock);
    const userRegister = await validateAuthentication();
    expect(userRegister).toEqual(userMock);
  });
});
