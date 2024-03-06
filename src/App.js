import React from 'react';
import Home from "./pages/home/Home";
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import Profile from './pages/profile/profile';
import { BrowserRouter, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="profile" element={<Profile />} />
        <Route path="register" element={<Register />} />
        <Route path="login" element={<Login />}>
        
       
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
