/* Implementing the API connection following the facade design pattern
 to increase mainatinability and code reusability */

import axios from 'axios';
import {BASE_URL} from '../../constants/api.constants';

export default class API {
  // Get request
  get(url) {
    return axios.get(`${BASE_URL + url}`);
  }
  // Get request with params.
  getWithParams(url, params) {
    console.log(`${BASE_URL + url}`);
    return axios.get(`${BASE_URL + url}`, params);
  }

  // Post request.
  post(url, options) {
    return axios.post(`${BASE_URL + url}`, options);
  }
}
