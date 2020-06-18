import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import { InfoProvider } from './components/context';
ReactDOM.render(
  <InfoProvider>
    <React.StrictMode>
      <Router>
        <App />
      </Router>
    </React.StrictMode>
  </InfoProvider>,
  document.getElementById('root')
);
