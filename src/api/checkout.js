import axios from "axios";

export default {
  payment() {
    return new Promise((res, rej) => {
      axios
        .get("/v3/5fd5b0a0-7cec-4ccf-bdec-b9c99c78e29f")
        .then((response) => {
          res(response);
        })
        .catch((error) => {
          rej(error);
        });
    });
  },
};
