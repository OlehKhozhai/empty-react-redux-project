import axios from 'axios';
import {
  EXAMPLE_CONST,
  EXAMPLE_ERROR,
  EXAMPLE_REQUEST,
  EXAMPLE_RESPONSE,
} from '../constants';

const exampleAsync = {
  request: () => ({ type: EXAMPLE_REQUEST }),
  response: payload => ({ type: EXAMPLE_RESPONSE, payload }),
  error: error => ({ type: EXAMPLE_ERROR, payload: error }),
};

export const exampleSyncAction = payload => ({ type: EXAMPLE_CONST, payload });

export const exampleAsyncAction = query => dispatch => {
  dispatch(exampleAsync.request());

  axios
    .get(`some api ${query}`)
    .then(res => dispatch(exampleAsync.response(res)))
    .catch(error => dispatch(exampleAsync.error(error)));
};
