import { http } from "./axios";

export default {
<<<<<<< Updated upstream
    postar: noticia => {
        return http.post("noticias", noticia);
    },

    atualizar: noticia => {
        return http.put("noticias/" + noticia, noticia);
    },

    listar: () => {
        return http.get("noticias");
    },

    apagar: noticia => {
        return http.delete("noticias/" + noticia);
    }
};
=======
  postar: noticia => {
    return http.post("noticias", noticia);
  },

  atualizar: noticia => {
    return http.put("noticias/" + noticia, noticia);
  },

  listar: () => {
    return http.get("noticias");
  },

  apagar: noticia => {
    return http.delete("noticias/" + noticia);
  }
};
>>>>>>> Stashed changes
