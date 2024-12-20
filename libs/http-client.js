import axios from 'axios';

export const url = 'https://crudcrud.com/api/6d6b1106bdc744abb1d9e167746cb867';

const httpClient = axios.create({
  baseURL: url,
  headers: {
    'Content-type': 'application/json',
  },
});

httpClient.interceptors.request.use((config) => {
  /* if (config.method === 'post') return config;
  console.log(config);
  config.data = {
    ...config.data,
    meta: 'key',
  };*/
  return config;
});

httpClient.interceptors.response.use(
  (succ) => {
    /* succ.data = {
        ...succ.data,
        "keyyy" : "keyyyyd"
    }*/

    return succ;
  },
  (err) => {
    //https://github.com/supershaneski/react-axios-intercept-sample/blob/main/src/api/index.js
    return err;
  },
);

export default httpClient;
