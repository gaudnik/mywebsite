import React from 'react';
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import Menu from './Components/Menu';
import Home from './Components/Home';
import Aboutme from './Components/Aboutme';
import Contact from './Components/Contact';

const App = () => {
  return (
    <Router>
    <div>
      <Menu />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<Aboutme />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  </Router>
  );
};

export default App;
