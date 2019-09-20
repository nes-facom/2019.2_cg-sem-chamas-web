import { http } from "./axios";

export default {
  salvar: denuncia => {
    return http.post("denuncia", denuncia);
  },

  atualizar: denuncia => {
    return http.put("denuncia", denuncia);
  },

  listar: () => {
    return http.get("denuncias");
  },

  apagar: denuncia => {
    return http.delete("denuncia", { data: denuncia });
  },

  exibir: denuncia => {
    return http.get("denuncia/" + denuncia, { data: denuncia });
  },

  procurar: denuncia => {
    return http.get("protocolo/" + denuncia, { data: denuncia });
  },
};
