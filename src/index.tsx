import React from 'react';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';

import App from './app';
import {interceptors} from './configs/interceptors';
import {persistor, store} from './store';

interceptors();

const Root = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  );
};

export default Root;
