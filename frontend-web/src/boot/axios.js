import axios from "axios";

const http = axios.create({
    baseURL: "http://157.245.216.139/"
});

export default async({ Vue }) => {
    Vue.prototype.$axios = axios;
};

export { http };
