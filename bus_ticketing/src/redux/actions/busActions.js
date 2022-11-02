import {
  GET_BUS_FAILURE,
  GET_BUS_REQUEST,
  GET_BUS_SUCCESS,
} from '../types/getBusTypes';

// Actions related to the Bus Search

export const sendBusRequest = data => ({
  type: GET_BUS_REQUEST,
  data: data,
});

export const busRequestSuccess = data => ({
  type: GET_BUS_SUCCESS,
  data: data,
});

export const busRequestFailure = err => ({
  type: GET_BUS_FAILURE,
  error: err,
});
