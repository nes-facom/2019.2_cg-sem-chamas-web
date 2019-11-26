import { http } from './axios';

export default {
  postar: role => {
    return http.post('roles', role);
  },

  atualizar: role => {
    return http.put('roles/' + role, role);
  },

  listar: () => {
    return http.get('roles');
  },

  apagar: role => {
    return http.delete('roles/' + role);
  }
};
