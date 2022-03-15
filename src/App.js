import logo from './logo.svg';
import './App.css';
import './style.scss';
import Home from "./commen/pages/home";
import {BrowserRouter, Router,Routes,Route} from "react-router-dom"
import Login from './commen/pages/login/login';
import Register from './commen/pages/register/register';
import ForgorPassword from './commen/pages/forgotpassword/forgorPassword';
import OTP from './commen/pages/forgotpassword/otp';
import ConfirmPassword from './commen/pages/forgotpassword/confirmpassword';
import Profile from './commen/pages/profile/profile';


function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Routes>
      <Route path='/' exact element={<Home />}/>
      <Route path='/login' exact element={<Login />}/>
      <Route path='/register' exact element={<Register />}/>
      <Route path='/forgotpassword' exact element={<ForgorPassword />}/>
      <Route path='/otp' exact element={<OTP />}/>
      <Route path='/confirmPassword' exact element={<ConfirmPassword />}/>
      <Route path='/profile' exact element={<Profile />}/>
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
