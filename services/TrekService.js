import axios from "axios";

const REST_API_BASE_URL_TREK = 'http://localhost:8081/trek/getAllMountains';

const REST_API_BASE_URL_TREK_GET = 'http://localhost:8081/trek/get';

export const listMountains = () => axios.get(REST_API_BASE_URL_TREK);

export const getMountains = (mountainId) => axios.get(REST_API_BASE_URL_TREK_GET + '/' + mountainId);

