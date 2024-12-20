import axios from 'axios';

export const url = 'https://random.dog';

const httpWoofWoof = axios.create({
  baseURL: url,
});

export default httpWoofWoof;
