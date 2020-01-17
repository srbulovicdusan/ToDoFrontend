import httpClient from '../HttpBaseClient';

const ENDPOINTS = {
  AUTH_REGISTRATION: '/auth/registration',
  AUTH_LOGIN: '/auth/login',
};

class AuthService {
  login = async credentials => {
    console.log(credentials);
    const { data } = await httpClient.getApiClient().post(
      ENDPOINTS.AUTH_LOGIN,
      credentials
    );

    await localStorage.setItem('token', data.access_token);
    window.location.href = "/";

    // this.attachHeaders({
    //   Authorization: `Bearer ${data.token}`
    // });
  };

  registration = userData => {
    return this.getApiClient().post(ENDPOINTS.AUTH_REGISTRATION, userData);
  };


}

export default new AuthService();