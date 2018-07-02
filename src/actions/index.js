export const TOGGLE_APPOINTEMENTS = 'TOGGLE_APPOINTEMENTS';
export const TOGGLE_UNIQUE_PATIENTS = 'TOGGLE_UNIQUE_PATIENTS';
export const API_CALL_REQUEST = 'API_CALL_REQUEST';


export const toggleUniquePatients = (format) => {
  return {
    type: TOGGLE_UNIQUE_PATIENTS,
    format,
  };
};
export const toggleAppointments = (format) => {
  return {
    type: TOGGLE_APPOINTEMENTS,
    format,
  };
};

export const onRequestData = () => {
  return {
    type: API_CALL_REQUEST,
  };
};