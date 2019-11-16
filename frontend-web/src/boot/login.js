import { http } from './axios';

export default {
  logar: login => {
    return http.post('sessions', login);
  },
  registrar: login => {
    return http.post('users', login);
  },
  check: token => {
    return http.get('/checkUser', {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json'
      }
    });
  },
  deslogar: token => {
    return http.post('logout', null, {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json'
      }
    });
  }
};
