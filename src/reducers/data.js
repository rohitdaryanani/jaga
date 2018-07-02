import { 
  TOGGLE_APPOINTEMENTS, 
  API_CALL_REQUEST, 
  TOGGLE_UNIQUE_PATIENTS, 
} from '../actions';

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
  uniquePatients: [],
  uniquePatientsByMonth: [], 
  uniquePatientsByWeek: [],
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
      appointmentByWeek: action.appointmentByWeek,
      uniquePatients: action.uniquePatientsByMonth, 
      uniquePatientsByMonth: action.uniquePatientsByMonth, 
      uniquePatientsByWeek: action.uniquePatientsByWeek
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

  case TOGGLE_UNIQUE_PATIENTS:
    if(action.format === 'week'){
      return {
        ...state,
        uniquePatients: state.uniquePatientsByWeek,
      };
    }else {
      return {
        ...state,
        uniquePatients: state.uniquePatientsByMonth,
      };
    }
  default:
    return state;
  }
};
