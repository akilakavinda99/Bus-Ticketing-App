/* Implementing the API connection following the facade design pattern
 to increase mainatinability and code reusability */

import axios from 'axios';
import {BASE_URL} from '../../constants/api.constants';

export default class API {
  get(url) {
    return axios.get(`${BASE_URL + url}`);
  }
  getWithParams(url, params) {
    console.log(`${BASE_URL + url}`);
    return axios.get(`${BASE_URL + url}`, params);
  }

  post(url, options) {
    // console.log('this is options', options);
    // console.log('this is url', `${BASE_URL + url}`);
    return axios.post(`${BASE_URL + url}`, options);
  }
}
