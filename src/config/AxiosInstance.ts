import axios from 'axios';

const AxiosInstance = axios.create({
  baseURL: 'http://localhost:3000',
  headers: {
    'Access-Control-Allow-Origin': '*'
  }
});

export default AxiosInstance;
