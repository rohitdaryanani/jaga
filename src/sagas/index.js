import {takeLatest, call, put} from 'redux-saga/effects';
import axios from 'axios';

const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

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
    const transformedData = data.map(i => 
      ({
        ...i, 
        month: months[new Date(i.start_date_time).getMonth()],
        day: days[new Date(i.start_date_time).getDay()],
        date: `${new Date(i.start_date_time).getFullYear()}-${new Date(i.start_date_time).getMonth() + 1}-${new Date(i.start_date_time).getDate()}`,
        sector: i.postal.trim().slice(0,2),
      }));
    const durationsByMonth = transformedData
      .reduce((s, n) => {
        const {duration, start_date_time } = n;
        const d = new Date(start_date_time);
        const month = months[d.getMonth()];
        const item = s.find((i) => i.month === month);
        if(!item) {
          const data = {
            duration,
            month,
            count: 1
          };
          s.push(data);
        } else {
          item.duration += duration;
          item.count++;
        }
        return s;
      }, months.map(month => ({month, count:0, duration:0})))
      .sort((a,b) => months.indexOf(a.month) - months.indexOf(b.month) );
      
    const durationsByWeek = transformedData
      .reduce((s, n) => {
        const {duration, start_date_time } = n;
        const d = new Date(start_date_time);
        const day = days[d.getDay()];
        const item = s.find((i) => i.day === day);
        if(!item) {
          const data = {
            duration,
            day,
          };
          s.push(data);
        } else {
          item.duration += duration;
        }
        return s;
      }, []).sort((a,b) => days.indexOf(a.day) - days.indexOf(b.day) );

    const uniquePatientsByMonth = transformedData
      .reduce((s, n) => {
        const {patient_id, start_date_time} = n;
        const d = new Date(start_date_time);
        const month = months[d.getMonth()];
        const item = s.find((i) => i.month === month);
        if(!item) {
          const data = {
            count: 1,
            patientId: [patient_id],
            month,
          };
          s.push(data);
        } else {
          const patientExist = item.patientId.find((i) => i === patient_id);
          if(!patientExist) {
            item.count++;
            item.patientId.push(patient_id);
          } else {
            item.patientId.push(patient_id);
          }
        }
        return s;
      }, months.map(month => ({month, count:0, patientId:[]})));
    
    const uniquePatientsByWeek = transformedData
      .reduce((s, n) => {
        const {patient_id, start_date_time} = n;
        const d = new Date(start_date_time);
        const day = days[d.getDay()];
        const item = s.find((i) => i.day === day);
        if(!item) {
          const data = {
            count: 1,
            patientId: [patient_id],
            day,
          };
          s.push(data);
        } else {
          const patientExist = item.patientId.find((i) => i === patient_id);
          if(!patientExist) {
            item.count++;
            item.patientId.push(patient_id);
          } else {
            item.patientId.push(patient_id);
          }
        }
        return s;
      }, days.map(day => ({day, count:0, patientId:[]})));
    
    yield put({
      type: 'API_CALL_SUCCESS', 
      data, 
      transformedData, 
      durationsByMonth, 
      durationsByWeek, 
      uniquePatientsByMonth, 
      uniquePatientsByWeek
    });
  } catch (error) {
    yield put({ type: 'API_CALL_FAILURE', error });
  }
}
