import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './css/index.css'; // Asegúrate de que la ruta del CSS sea correcta

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
