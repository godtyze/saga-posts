import axios from 'axios';

const baseURL = 'https://jsonplaceholder.typicode.com/';

export const instance = axios.create({
  baseURL: baseURL,
});
