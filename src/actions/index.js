export const TOGGLE_DURATIONS = 'TOGGLE_DURATIONS';
export const TOGGLE_UNIQUE_PATIENTS = 'TOGGLE_UNIQUE_PATIENTS';
export const TOGGLE_UNIQUE_JAGPROS = 'TOGGLE_UNIQUE_JAGPROS';
export const API_CALL_REQUEST = 'API_CALL_REQUEST';


export const toggleUniquePatients = (format) => {
  return {
    type: TOGGLE_UNIQUE_PATIENTS,
    format,
  };
};
export const toggleDurations = (format) => {
  return {
    type: TOGGLE_DURATIONS,
    format,
  };
};

export const onRequestData = () => {
  return {
    type: API_CALL_REQUEST,
  };
};

export const toggleUniqueJagpros = (format) => {
  return {
    type: TOGGLE_UNIQUE_JAGPROS,
    format,
  };
};