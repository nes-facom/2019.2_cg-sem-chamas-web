import { http } from "./axios";

export default {
  salvar: denuncia => {
    return http.post("denuncia", denuncia);
  },

  atualizar: denuncia => {
    return http.put("denuncia/" + denuncia, denuncia);
  },

  listar: () => {
    return http.get("denuncias");
  },

  apagar: denuncia => {
    return http.delete("denuncia/" + denuncia, { data: denuncia });
  },

  exibir: denuncia => {
    return http.get("denuncia/" + denuncia, { data: denuncia });
  },

  procurar: denuncia => {
    return http.get("protocolo/" + denuncia, { data: denuncia });
  },

  contar: () => {
    return http.get("total");
  },
};
