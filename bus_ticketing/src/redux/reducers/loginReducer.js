import {
  LOGIN_REQUEST_FAILURE,
  LOGIN_REQUEST_SUCCESS,
  SEND_LOGIN_REQUEST,
} from '../types/loginTypes';

const initialState = {
  loading: false,
  data: null,
  error: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SEND_LOGIN_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case LOGIN_REQUEST_SUCCESS:
      return {
        ...state,

        loading: false,
        data: action.data,
        error: null,
      };
    case LOGIN_REQUEST_FAILURE:
      return {
        ...state,
        loading: false,
        data: {},
        error: action.error,
      };

    default:
      return state;
  }
};
