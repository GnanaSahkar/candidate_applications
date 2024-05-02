import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'; // Import Provider from react-redux
import store from './redux/store'; // Import your Redux store
import App from './App';

ReactDOM.createRoot(
  document.getElementById('root')
).render(
  <React.StrictMode>
    <Provider store={store}> {/* Wrap your App component with Provider and pass the store */}
      <App />
    </Provider>
  </React.StrictMode>
);
