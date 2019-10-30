import { http } from "./axios";


export default {

    postar: noticia => {
        return http.post("noticia", login);
    }
}