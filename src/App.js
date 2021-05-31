import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from './Footer'
import Header from './Header'
import { Home } from './Home'
import Login from './Login/Login'

function App() {
  return (
    <div className="App">
      <h2>Adicionando meus dois componentes bases Header e Footer</h2>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
