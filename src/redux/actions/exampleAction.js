import axios from 'axios';
import { EXAMPLE_ERROR, EXAMPLE_REQUEST, EXAMPLE_RESPONSE } from '../types';

export const exampleSyncAction = payload => ({
  type: EXAMPLE_RESPONSE,
  payload,
});

export const exampleAsyncAction = query => dispatch => {
  dispatch({ type: EXAMPLE_REQUEST });

  axios
    .get(`some api ${query}`)
    .then(res => dispatch({ type: EXAMPLE_RESPONSE, payload: res }))
    .catch(error => dispatch({ type: EXAMPLE_ERROR, payload: error }));
};
