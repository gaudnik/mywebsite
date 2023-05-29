import React from 'react';
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import Menu from './Components/Menu';
import Home from './Components/Home';
import Aboutme from './Components/Aboutme';
import Tools from './Components/Tools';
import Contact from './Components/Contact';
import Projects from './Components/Projects';

const App = () => {
  return (
    <Router>
    <div>
      <Menu />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutme" element={<Aboutme />} />
        <Route path='/Tools' element={<Tools/>}/>
        <Route path='/Tools' element={<Projects/>}/>

        <Route path="/contact" element={<Contact />} />

      </Routes>
    </div>
  </Router>
  );
};

export default App;
