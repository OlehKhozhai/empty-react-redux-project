import {
  EXAMPLE_REQUEST,
  EXAMPLE_RESPONSE,
  EXAMPLE_ERROR,
  EXAMPLE_CONST,
} from '../constants';

const initialState = {
  example: [],
  isLoading: false,
  isError: false,
};

const exampleReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case EXAMPLE_REQUEST:
      return {
        ...state,
        isLoading: true,
      };

    case EXAMPLE_RESPONSE:
      return {
        ...state,
        ...payload,
        isLoading: false,
      };

    case EXAMPLE_ERROR:
      return {
        ...state,
        isLoading: false,
      };

    case EXAMPLE_CONST:
      return {
        ...state,
        ...payload,
        isLoading: false,
      };

    default:
      return state;
  }
};

export default exampleReducer;
