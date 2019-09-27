import axios from "axios";

const http = axios.create({
    baseURL: "https://absolutier.com.br/"
});

export default async({ Vue }) => {
    Vue.prototype.$axios = axios;
};

export { http };
