import { http } from './axios';

export default {
  logar: login => {
    return http.post('sessions', login);
  },
  registrar: registrar => {
    return http.post('users', registrar);
  },
  deslogar: token => {
    return http.post('logout', null, {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json'
      }
    });
  },
  check: token => {
    return http.get('/checkUser', {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json'
      }
    });
  }
};
