import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';


ReactDOM.render(
  <BrowserRouter basename={process.env.PUBLIC_URL}>
    <App />
  </BrowserRouter>
  document.getElementById('root')
);


