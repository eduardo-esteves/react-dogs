import React from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from './Footer'
import Header from './Header'
import { Home } from './Home'
import Login from './Login/Login'
import { UserStorage } from './UserContext';
import User from './user/User';
import ProtectedRoute from './ui/ProtectedRoute';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <UserStorage>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="login/*" element={<Login />} />
          <ProtectedRoute path="conta/*" element={<User />} />
        </Routes>
        <Footer />
      </UserStorage>
      </BrowserRouter>
    </div>
  );
}

export default App;
