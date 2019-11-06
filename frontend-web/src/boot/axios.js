import axios from 'axios';

const teste = 'http://localhost:3333/';

const http = axios.create({
  baseURL: teste
});

export default async ({ Vue }) => {
  Vue.prototype.$axios = axios;
};

export { http };
