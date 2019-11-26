import { http } from "./axios";
const token = localStorage.getItem("userToken");

export default {
  postar: noticia => {
    return http.post("noticias", noticia, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json"
      }
    });
  },

  atualizar: (id, data) => {
    return http.put("noticias/" + id, data, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json"
      }
    });
  },

  listar: () => {
    return http.get("noticias", {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json"
      }
    });
  },

  apagar: noticia => {
    return http.delete("noticias/" + noticia, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json"
      }
    });
  }
};
