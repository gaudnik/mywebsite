import React from 'react';
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import Menu from './Components/Menu';
import Home from './Components/Home';
import Aboutme from './Components/Aboutme';
import Tools from './Components/Tools';
import Contact from './Components/Contact';
import Projects from './Components/Projects';
import ScoutTest from './Components/ScoutTest';
import SendMessage from './Components/SendMessage';

const App = () => {
  return (
    <Router>
    <div>
      <Menu />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutme" element={<Aboutme />} />
        <Route path='/tools' element={<Tools/>}/>
        <Route path='/projects' element={<Projects/>}/>
        <Route path="/contact" element={<Contact />} />
        <Route path='/testharcerski' element={<ScoutTest/>}/>
        <Route path='/send_message' element={<SendMessage/>}/>
      </Routes>
    </div>
  </Router>
  );
};

export default App;
