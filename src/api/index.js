import axios from "axios";

// export const DOMAIN = "";

// axios.interceptors.request.use(
//   function (config) {
//     config.baseURL = DOMAIN;
//     const token = localStorage.getItem("token");
//     if (token) {
//       config.headers.Authorization = `Bearer ${token}`;
//     }
//     return config;
//   },
//   function (err) {
//     return Promise.reject(err);
//   }
// );

// axios.interceptors.response.use(
//   response => response,
//   error => {
//     if (error.response.status === 401) {
//       localStorage.setItem("token", "")
//     }
//   });

// axios.defaults.baseURL = DOMAIN
// axios.defaults.headers.common["Authorization"] = `Bearer ${localStorage.getItem("token")}`
