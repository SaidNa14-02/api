import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home.jsx';
import Login from './pages/login.jsx';
import Dashboard from './pages/dashboard.jsx';
import NavBar from './components/navbar.jsx';
import About from './pages/About.jsx';
import ProtectedRoute from './components/protectedRoute.jsx';
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path='/dashboard' element={
          <ProtectedRoute>
            <Dashboard/>
          </ProtectedRoute>
          }/>
        <Route path="/About" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App
