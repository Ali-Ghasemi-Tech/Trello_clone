// src/api/axios.js
import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:8000', // change to production backend URL when deploying
  withCredentials: true, // if using cookies/session auth
});

export default instance;
