import React from 'react';
import ReactDOM from 'react-dom/client';  // Importando o createRoot de react-dom/client
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Substituindo ReactDOM.render por createRoot
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
