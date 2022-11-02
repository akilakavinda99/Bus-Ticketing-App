import {
  LOGIN_REQUEST_FAILURE,
  LOGIN_REQUEST_SUCCESS,
  SEND_LOGIN_REQUEST,
} from '../types/loginTypes';

// Actions related to the Bus Search

export const sendLoginRequestAction = data => ({
  type: SEND_LOGIN_REQUEST,
  data: data,
});

export const loginRequestSuccess = data => ({
  type: LOGIN_REQUEST_SUCCESS,
  data: data,
});

export const loginRequestFailure = err => ({
  type: LOGIN_REQUEST_FAILURE,
  error: err,
});
