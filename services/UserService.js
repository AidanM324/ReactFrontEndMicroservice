import axios from "axios";

const REST_API_BASE_URL = 'http://localhost:8080/login/getAllAccounts';

const REST_API_BASE_URL_ADD = 'http://localhost:8080/login/create';

const REST_API_BASE_URL_UPDATE = 'http://localhost:8080/login';

const REST_API_BASE_URL_DELETE = 'http://localhost:8080/login/delete';

const REST_API_BASE_URL_VERIFY = 'http://localhost:8080/login/verify';

export const listUsers = () => axios.get(REST_API_BASE_URL);

export const createUser = (user) => axios.post(REST_API_BASE_URL_ADD, user);

export const getUser = (userId) => axios.get(REST_API_BASE_URL_UPDATE + '/' + userId);
 
export const updateUser = (userId, user) => axios.put(REST_API_BASE_URL_UPDATE + '/' + userId, user);

export const deleteUser = (userId) => axios.delete(REST_API_BASE_URL_DELETE + '/' + userId);

export const verifyUser = (name, password) => axios.post(REST_API_BASE_URL_VERIFY + '/' + name, password);
