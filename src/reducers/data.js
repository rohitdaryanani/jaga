import { GET_DATA } from '../actions/index';
const initialState = [];

export default (state = initialState, action) => {
  switch (action.type) {
  case GET_DATA:
    return [
      ...state,
    ];

  default:
    return state;
  }
};
