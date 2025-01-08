import axios from "axios";

const REST_API_BASE_URL = 'http://localhost:8081/trek/getAllMountains';

const REST_API_BASE_URL_ADD = 'http://localhost:8081/trek/addMountain';

const REST_API_BASE_URL_UPDATE = 'http://localhost:8081/trek';

const REST_API_BASE_URL_DELETE = 'http://localhost:8081/trek/delete';

export const listMountains = () => axios.get(REST_API_BASE_URL);

export const createMountain = (mountain) => axios.post(REST_API_BASE_URL_ADD, mountain);

export const getMountain = (mountainId) => axios.get(REST_API_BASE_URL_UPDATE + '/' + mountainId);
 
export const updateMountain = (Id, mountain) => axios.put(REST_API_BASE_URL_UPDATE + '/' + Id, mountain);

export const deleteMountain = (Id) => axios.delete(REST_API_BASE_URL_DELETE + '/' + Id);
