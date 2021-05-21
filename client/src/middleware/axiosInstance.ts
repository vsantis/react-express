import axios from 'axios';

const axiosInstance = axios.create({ baseURL: 'http://localhost:3001/api' });

axiosInstance.interceptors.request.use(
  (config) => {
    const tokenUrl = 'http://localhost:3001/api/token';
    return axios
      .post(tokenUrl, {
        name: 'victor',
        lastname: 'santis',
      })
      .then((result) => {
        config.headers['Authorization'] = `Bearer ${result.data.token}`;
        return Promise.resolve(config);
      })
      .catch((error) => Promise.reject(error));
  },
  (error) => Promise.reject(error)
);

export default axiosInstance;
