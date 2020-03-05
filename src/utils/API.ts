const axios = require('axios').default;

export const baseUrl = axios.create({
  baseURL: "http://www.mockapi.io/projects/5e443d193dfe6c001421f631",
  responseType: "json"
});

