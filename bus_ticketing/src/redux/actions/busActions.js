import {
  GET_BUS_FAILURE,
  GET_BUS_REQUEST,
  GET_BUS_SUCCESS,
} from '../types/getBusTypes';

export const sendLoginRequest = data => ({
  type: GET_BUS_REQUEST,
  data: data,
});

export const loginRequestSuccess = data => ({
  type: GET_BUS_SUCCESS,
  data: data,
});

export const loginRequestFailure = err => ({
  type: GET_BUS_FAILURE,
  error: err,
});
