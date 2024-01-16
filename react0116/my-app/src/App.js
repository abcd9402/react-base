import React from 'react';
import Home from './pages/Home.js';
import About from './pages/About.js';
import {Routes,Route,Link} from 'react-router-dom';
import Counter from './pages/Counter.js';
import Input from './pages/Input.js';
import Input2 from './pages/Input2.js';

function App() {
  return (
    <div className="App">
      <nav>
        <Link to="/">Home</Link> {/* a태그와 같은 Link태그 */ }|
        <Link to="/about">About</Link>|
        <Link to="/counter">Counter</Link>|
        <Link to="/input">Input</Link>|
        <Link to="/input2">Input2</Link>|
      </nav>
      <Routes>   {/* Router -> 매핑  Routes안에 Route로 세팅  Routes가 Link와 매핑되며 페이지 변경*/}
        <Route path='/' element={<Home />} />    {/* to와 path 동기화  */}
        <Route path='/about' element={<About />} />
        <Route path='/counter' element={<Counter />} />
        <Route path='/input' element={<Input />} />
        <Route path='/input2' element={<Input2 />} />
      </Routes>
      
    </div>
  );
}

export default App;
