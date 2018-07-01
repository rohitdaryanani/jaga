import { TOGGLE_APPOINTEMENTS, API_CALL_REQUEST } from '../actions';

// action types
const API_CALL_SUCCESS = 'API_CALL_SUCCESS';
const API_CALL_FAILURE = 'API_CALL_FAILURE';

// reducer with initial state
const initialState = {
  fetching: false,
  data: [],
  transformedData: [],
  appointment:[],
  appointmentByMonth: [],
  appointmentByWeek: [],
  error: null
};

export default (state = initialState, action) => {
  switch (action.type) {
  case API_CALL_REQUEST:
    return { ...state, fetching: true, error: null };
  case API_CALL_SUCCESS:
    return {
      ...state, 
      fetching: false, 
      data: action.data, 
      transformedData: action.transformedData,
      appointment: action.appointmentByMonth,
      appointmentByMonth: action.appointmentByMonth, 
      appointmentByWeek: action.appointmentByWeek
    };
  case API_CALL_FAILURE:
    return { ...state, fetching: false, data: null, error: action.error };
  case TOGGLE_APPOINTEMENTS:
    
    if(action.format === 'week'){
      return {
        ...state,
        appointment: state.appointmentByWeek,
      };
    }else {
      return {
        ...state,
        appointment: state.appointmentByMonth,
      };
    }
  default:
    return state;
  }
};
