import React from 'react';
import ReactDOM from 'react-dom/client';
// Redux
import { Provider } from 'react-redux';
import store from './store/store';
import App from './App';
import './services/translations/i18n';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
