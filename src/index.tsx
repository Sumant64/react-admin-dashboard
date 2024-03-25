import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Main from './layout/Main';
import './styles/main.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Main>
      <App />
    </Main>
  </React.StrictMode>
);

