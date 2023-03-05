import axios from "axios";

export const DOMAIN = "https://run.mocky.io/";

axios.interceptors.request.use(
  function (config) {
    config.baseURL = DOMAIN;
    return config;
  },
  function (err) {
    return Promise.reject(err);
  }
);

axios.defaults.baseURL = DOMAIN;
