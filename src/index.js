import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import express from 'express';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();



const app = express()

app.listen(3000, () => console.log("Api turning in the PORT 5001"))

app.get('/', (req,res) => res.json("Mira!! ya logre subir algo a la nube, te amo Sofia <3"))