import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';


import App from './containers/App';
import reducers from './reducers';
import { watcherSaga } from './sagas';

import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const sagaMiddleware = createSagaMiddleware();

// const createStoreWithMiddleware = applyMiddleware()(createStore);
let store = createStore(
  reducers,
  compose(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(watcherSaga);

ReactDOM.render(
  <Provider store={store}>
    <div>
      <App />
    </div>
  </Provider>,
  document.getElementById('root')
);