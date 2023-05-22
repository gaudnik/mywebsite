import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./Sass/index.scss";
import Home from "./Components/Home";

function App() {
  return (
    <div className="App">
       <Router>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
