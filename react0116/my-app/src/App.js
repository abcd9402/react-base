import React from 'react';
import Home from './pages/Home.js';
import About from './pages/About.js';
import {Routes,Route,Link} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <nav>
        <Link to="/">Home</Link> {/* a태그와 같은 Link태그 */ }
        <Link to="/about">About</Link>
      </nav>
      <Routes>   {/* Router -> 매핑  Routes안에 Route로 세팅  Routes가 Link와 매핑되며 페이지 변경*/}
        <Route path='/' element={<Home />} />    {/* to와 path 동기화  */}
        <Route path='/about' element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
