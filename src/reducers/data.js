import { 
  TOGGLE_DURATIONS, 
  API_CALL_REQUEST, 
  TOGGLE_UNIQUE_PATIENTS,
  TOGGLE_UNIQUE_JAGPROS,
  TOGGLE_TOTAL_FEES,
} from '../actions';

// action types
const API_CALL_SUCCESS = 'API_CALL_SUCCESS';
const API_CALL_FAILURE = 'API_CALL_FAILURE';

// reducer with initial state
const initialState = {
  fetching: false,
  data: [],
  transformedData: [],
  durations: [],
  appointmentByMonth: [],
  appointmentByWeek: [],
  uniquePatients: [],
  uniquePatientsByMonth: [], 
  uniquePatientsByWeek: [],
  uniqueJagpros: [],
  uniqueJagprosByMonth: [],
  uniqueJagprosByWeek: [],
  totalFees: [],
  totalFeesByWeekByMonth: [],
  totalFeesByWeekByWeek: [],
  postalAppointment: [],
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
      durations: action.durationsByMonth,
      durationsByMonth: action.durationsByMonth, 
      durationsByWeek: action.durationsByWeek,
      uniquePatients: action.uniquePatientsByMonth, 
      uniquePatientsByMonth: action.uniquePatientsByMonth, 
      uniquePatientsByWeek: action.uniquePatientsByWeek,
      uniqueJagpros: action.uniqueJagprosByMonth,
      uniqueJagprosByMonth: action.uniqueJagprosByMonth,
      uniqueJagprosByWeek: action.uniqueJagprosByWeek,
      totalFees: action.totalFeesByMonth,
      totalFeesByMonth: action.totalFeesByMonth,
      totalFeesByWeek: action.totalFeesByWeek,
      postalAppointment: action.postalAppointment,
    };

  case API_CALL_FAILURE:
    return { ...state, fetching: false, data: null, error: action.error };

  case TOGGLE_DURATIONS:
    if(action.format === 'week'){
      return {
        ...state,
        durations: state.durationsByWeek,
      };
    }else {
      return {
        ...state,
        durations: state.durationsByMonth,
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

  case TOGGLE_UNIQUE_JAGPROS:
    if(action.format === 'week'){
      return {
        ...state,
        uniqueJagpros: state.uniqueJagprosByWeek,
      };
    }else {
      return {
        ...state,
        uniqueJagpros: state.uniqueJagprosByMonth,
      };
    }

  case TOGGLE_TOTAL_FEES:
    if(action.format === 'week'){
      return {
        ...state,
        totalFees: state.totalFeesByWeek,
      };
    }else {
      return {
        ...state,
        totalFees: state.totalFeesByMonth,
      };
    }
  default:
    return state;
  }
};
