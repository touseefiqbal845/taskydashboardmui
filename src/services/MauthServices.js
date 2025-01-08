import axios from 'axios';
// import { BASE_URL } from '../constant/env';

class MAuthService {
  constructor() {
    this.baseApiUrl = 'https://tasky-backend-eosin.vercel.app/api' || '';

    this.instance = axios.create({
      baseURL: this.baseApiUrl,
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      timeout: 300000,
    });

    this.instance.interceptors.request.use(
      (config) => {
        const userAuth = localStorage.getItem('token');
        if (userAuth && config.headers) {
          config.headers.Authorization = `Bearer ${userAuth}`;
        }
        return config;
      },
      (error) => Promise.reject(error)
    );
  }

  async register(data) {
    try {
      const response = await this.instance.post('/auth/users/signup', data);
      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        throw new Error(error.response?.data?.message || 'register failed.');
      }
      throw error;
    }
  }

  async login(data) {
    try {
      const response = await this.instance.post('/auth/users/login', data);
      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        throw new Error(error.response?.data?.message || 'Login failed.');
      }
      throw error;
    }
  }
}

const authService = new MAuthService();
export default authService;
