import { http } from './axios';

export default {
  postar: permission => {
    return http.post('permissions', permission);
  },

  atualizar: permission => {
    return http.put('permissions/' + permission, permission);
  },

  listar: () => {
    return http.get('permissions');
  },

  apagar: permission => {
    return http.delete('permissions/' + permission);
  }
};
