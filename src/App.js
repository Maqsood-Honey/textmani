import React, { useState } from 'react'
import Navbar from './TextUtils/Navbar';
import Alert from './TextUtils/Alert'
import TextArea from './TextUtils/TextForm';
import { BrowserRouter, Routes, Route } from "react-router-dom";
//import Accordian from './TextUtils/Accordian';
import About from './TextUtils/About';
//import Resturant from './Basic/Resturant'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
const App = () => {
  const [alert, setAlert] = useState(null);

  const showAlert = (msg, type) => {
    setAlert({
      msg: msg,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }
  const removeBodyClasses = () => {
    document.body.classList.remove('bg-primary');
    document.body.classList.remove('bg-success');
    document.body.classList.remove('bg-danger');
    document.body.classList.remove('bg-warning');
  }
  const pallet = (cls) => {
    removeBodyClasses();
    document.body.classList.add('bg-' + cls);
  }
  return (
    <>
      <BrowserRouter>
        <Navbar AppName="TextUtils" pallet={pallet} />
        <Alert alert={alert} />

        <Routes>

          <Route path="/" element={<TextArea showAlert={showAlert} />} />
          <Route path="/home" element={<TextArea showAlert={showAlert} />} />
          <Route path="/about" element={<About />} />

        </Routes>
      </BrowserRouter>

    </>
  )
}
export default App;