import axios, {AxiosError, AxiosResponse} from 'axios';
import {BASE_URL} from '../constants';

const apiClient = axios.create({
  baseURL: BASE_URL,
  responseType: 'json',
  headers: {
    'Content-Type': 'application/json',
  },
});

apiClient.interceptors.response.use(
  (response: AxiosResponse) => response,
  async (error: AxiosError) => {
    if (!error.response) {
      return Promise.reject(error);
    }
    switch (error.response.status) {
      case 401:
        throw Error('Unauthorized user');
      case 409:
        if (error.request.responseURL.includes('bulk')) {
          throw Error(
            'There is a bulk upload in progress, please try again later',
          );
        }
        throw Error('Conflict');
      default:
        throw Error(error.message.toString());
    }
  },
);

export {apiClient};
