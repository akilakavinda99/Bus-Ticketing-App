/* Implementing the API connection following the facade design pattern
 to increase mainatinability and code reusability */

import axios from 'axios';
import {BASE_URL} from '../../constants/api.constants';

export default class API {
  get(url) {
    return axios.get(`${BASE_URL + url}`);
  }
  getWithParams(url, params) {
    return axios.get(`${BASE_URL + url}`, params);
  }

  post(url, options) {
    return axios.post(`${BASE_URL + url}`, options);
  }
}
