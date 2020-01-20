import httpClient from '../HttpBaseClient';
import { history } from '../../index';

const ENDPOINTS = {
  AUTH_REGISTRATION: '/auth/registration',
  AUTH_LOGIN: '/auth/login',
  AUTH_LOGOUT: '/auth/logout'
};

class AuthService {

  login = async credentials => {
    console.log(credentials);
    const { data } = await httpClient.getApiClient().post(
      ENDPOINTS.AUTH_LOGIN,
      credentials
    );
    console.log("login", data)

    localStorage.setItem('token', data.access_token);
    //history.push("/");
    return data
  };
  logout = async payload => {
    await httpClient.getApiClient().post(
      ENDPOINTS.AUTH_LOGOUT,
      payload
    );
  }
  registration = userData => {
    return this.getApiClient().post(ENDPOINTS.AUTH_REGISTRATION, userData);
  };


}

export default new AuthService();