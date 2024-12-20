import { AxiosInstance } from 'axios';

export const postData = async <T>(httpClient: AxiosInstance, payload: T) => {
  const response = await httpClient.post<T>('/movies', payload);

  let newPayload = {
    ...response.data,
    meta: 'key',
  };

  return newPayload;
};
