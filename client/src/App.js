import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import React, {useState, useEffect, createContext} from 'react';
import Header from './components/Header/Header'
import Home from './pages/home/Home'
function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
