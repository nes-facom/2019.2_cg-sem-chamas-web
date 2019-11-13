import { http } from "./axios";

export default {
  logar: login => {
    return http.post("sessions", login);
  },
  registrar: registrar => {
    return http.post("users", registrar);
  }
};
