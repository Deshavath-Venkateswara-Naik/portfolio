import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// You can add any global providers here if needed (e.g., Redux, ThemeProvider)

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
