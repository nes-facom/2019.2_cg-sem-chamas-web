import axios from 'axios';

const api = process.env.API_SERVER;
const http = axios.create({
  baseURL: `${api}`
});

export default async ({ Vue }) => {
  Vue.prototype.$axios = axios;
};

export { http };
