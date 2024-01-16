import React from 'react';
import Home from './pages/Home.js';
import {Routes,Route,Link} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">about</Link>
      </nav>
      <Home />
    </div>
  );
}

export default App;
