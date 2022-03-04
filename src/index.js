import React from 'react';
import { render } from 'react-dom';
import App from './App';
import store from './store';
import { Provider } from 'react-redux';
import { ContextProvider } from './context';

render(
  <React.StrictMode>
    <Provider store={store}>
      <ContextProvider>
        <App />
      </ContextProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
