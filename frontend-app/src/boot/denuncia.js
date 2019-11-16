import { http } from './axios';

export default {
  salvar: (denuncia, token) => {
    return http.post('denuncia', denuncia, {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json'
      }
    });
  },

  atualizar: denuncia => {
    return http.put('denuncia', denuncia);
  },

  byUser: (id, token) => {
    return http.get(`byUser/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json'
      }
    });
  },

  apagar: denuncia => {
    return http.delete('denuncia', { data: denuncia });
  },

  exibir: denuncia => {
    return http.get('denuncia/' + denuncia, { data: denuncia });
  },

  procurar: denuncia => {
    return http.get('protocolo/' + denuncia, { data: denuncia });
  }
};
