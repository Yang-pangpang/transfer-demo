/*
 * @Author: Yonga
 * @Date: 2023-08-17 20:53:45
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2023-08-17 22:09:16
 * @FilePath: /transfer-demo/src/index.tsx
 */
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
