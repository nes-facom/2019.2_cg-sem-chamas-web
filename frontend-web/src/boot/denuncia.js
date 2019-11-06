import { http } from './axios';
import Store from '../store/index';
let token = Store.Session

export default {
  salvar: denuncia => {
    return http.post('denuncia', denuncia);
  },

  atualizar: denuncia => {
    return http.put('denuncia/' + denuncia, denuncia);
  },

  listar: () => {
    return http.get('denuncias');
  },

  apagar: denuncia => {
    console.log('Denuncia: ', denuncia);
    console.log('Token: ', token);

    return http.delete(
      'denuncia/' + denuncia,

      {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      }
    );
  },

  exibir: denuncia => {
    return http.get('denuncia/' + denuncia, { data: denuncia });
  },

  procurar: denuncia => {
    return http.get('protocolo/' + denuncia, { data: denuncia });
  },

  contar: () => {
    return http.get('total');
  }
};
