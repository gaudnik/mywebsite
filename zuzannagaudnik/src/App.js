import React from 'react';
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import Menu from './Components/Menu';
import Home from './Components/Home';
import Aboutme from './Components/Aboutme';
import Tools from './Components/Tools';
import Contact from './Components/Contact';
import Projects from './Components/Projects';
import ScoutTest from './Components/ScoutTest';
import SentMessage from './Components/SendMessage';
import Footer from './Components/Footer';

const App = () => {
  return (
    <Router>
    <div className='background__container'>
      <Menu />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutme" element={<Aboutme />} />
        <Route path='/tools' element={<Tools/>}/>
        <Route path='/projects' element={<Projects/>}/>
        <Route path="/contact" element={<Contact />} />
        <Route path='/testharcerski' element={<ScoutTest/>}/>
        <Route path='/send_message' element={<SentMessage/>}/>
      </Routes>
      <Footer/>
    </div>
  </Router>
  );
};

export default App;
