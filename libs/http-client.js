import axios from 'axios';

const httpClient = axios.create({
  baseURL: 'https://crudcrud.com/api/6d6b1106bdc744abb1d9e167746cb867',
  headers: {
    'Content-type': 'application/json',
  },
});

export default httpClient;
