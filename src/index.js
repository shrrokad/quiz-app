import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import store from './store';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { Provider } from 'react-redux/es/exports';
import Qestion from './components/Qestion';
import Navbar from './components/Navbar'
import Examination from './components/Examination';
import Result from './components/Result';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <Navbar/>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/Qestion" element={<Qestion />} />
        <Route path="/Examination" element={<Examination />} />
        <Route path="/Result" element={<Result />} />
      </Routes>
    </BrowserRouter>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
