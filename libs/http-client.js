import axios from 'axios';

const httpClient = axios.create({
  baseURL: 'https://crudcrud.com/api/ici',
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
