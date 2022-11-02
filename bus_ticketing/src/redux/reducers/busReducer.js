import {
  GET_BUS_FAILURE,
  GET_BUS_REQUEST,
  GET_BUS_SUCCESS,
} from '../types/getBusTypes';

const initialState = {
  loading: false,
  data: null,
  error: null,
};

// Reducer takes the state and update it accordingly.
export default (state = initialState, action) => {
  switch (action.type) {
    case GET_BUS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case GET_BUS_SUCCESS:
      return {
        ...state,

        loading: false,
        data: action.data,
        error: null,
      };
    case GET_BUS_FAILURE:
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
