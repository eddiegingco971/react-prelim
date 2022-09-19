import "./App.css";
import { Routes, Route, useNavigate } from "react-router-dom";

import Home from "./pages/Home";
import { Navbar } from "react-bootstrap";
import Footer from './components/Footer';

function App() {
  
  return (
  <>
      <div className="container mt-4">
        <Home/>
      </div>
  </>
    
  );
}

export default App;
