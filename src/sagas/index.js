import {takeLatest, call, put} from 'redux-saga/effects';
import axios from 'axios';

export function* watcherSaga(){
  yield takeLatest('API_CALL_REQUEST', workerSaga);
}

function fetchData() {
  return axios({
    method: 'get',
    headers: {
      'x-api-key': 'iRsabQj7hlaFkRdqXEtCq2fUNB2cuLnh5pLesMJd'
    },
    url: 'https://82v9umvzoj.execute-api.ap-southeast-1.amazonaws.com/dev/slots'
  });
}

function* workerSaga() {
  try {
    const response = yield call(fetchData);
    const data = response.data.slots;
    yield put({ type: 'API_CALL_SUCCESS', data});
  } catch (error) {
    yield put({ type: 'API_CALL_FAILURE', error });
  }
}
