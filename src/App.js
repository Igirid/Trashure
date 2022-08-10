// import logo from './logo.svg';
import './App.css';
import Home from './home/Home';
import { Routes, Route } from "react-router-dom";
import Contact from './contact/Contact';
import Signup from './signup/Signup';
import Signin from './signin/Signin';



function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
      </Routes>

    </div>
  );
}

export default App;
