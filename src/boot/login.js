import { http } from "./axios";
const token = localStorage.getItem("userToken");
export default {
  atualizar: (id, data) => {
    return http.put("users/" + id, data, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json"
      }
    });
  },
  listar: () => {
    return http.get("users", {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json"
      }
    });
  },
  logar: login => {
    return http.post("sessions", login);
  },
  registrar: login => {
    return http.post("users", login);
  },
  check: token => {
    return http.get("/checkUser", {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json"
      }
    });
  },
  deslogar: token => {
    return http.post("logout", null, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json"
      }
    });
  }
};
