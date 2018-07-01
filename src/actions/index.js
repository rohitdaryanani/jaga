export const TOGGLE_APPOINTEMENTS = 'TOGGLE_APPOINTEMENTS';
export const API_CALL_REQUEST = 'API_CALL_REQUEST';


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