import axios from "axios";

const denuncias = axios.create({
  baseURL: "http://localhost:3333/"
});

export default async ({ Vue }) => {
  Vue.prototype.$axios = axios;
};

export { denuncias };
