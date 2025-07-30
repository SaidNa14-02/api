import { useState } from 'react'
import { BrowserRouter, Route, Routes, Router} from 'react-router';
import Home from './Home.jsx';
import Login from './login.jsx';
import Dashboard from './dashboard.jsx';
import NavBar from './navbar.jsx';
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App
