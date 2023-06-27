import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import About from './TextUtils/About';
// import { BrowserRouter, Routes, Route } from "react-router-dom";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <> <div className='container my-3' >
        <App />
    </div>
        {/* <BrowserRouter>

            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/about" element={<About />} />

            </Routes>
        </BrowserRouter> */}
    </>


);


