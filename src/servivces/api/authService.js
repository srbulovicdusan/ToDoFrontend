import httpClient from '../HttpBaseClient';

const ENDPOINTS = {
  AUTH_REGISTRATION: '/auth/registration',
  AUTH_LOGIN: '/auth/login',
  AUTH_LOGOUT: '/auth/logout'
};

class AuthService {

  login = async credentials => {
    const { data } = await httpClient.getApiClient().post(
      ENDPOINTS.AUTH_LOGIN,
      credentials
    );
    await localStorage.setItem('token', data.access_token);
    return data
  };
  
  registration = async userData => {
    const{data} = await httpClient.getApiClient().post(ENDPOINTS.AUTH_REGISTRATION, userData);
    await localStorage.setItem('token', data.access_token);
    return data;
  };


}

export default new AuthService();