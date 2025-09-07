// CSS
import './App.css';

// 1 - CONFIG REACT ROUTER
import { BrowserRouter } from "react-router";
import { Routes } from "react-router";
import { Route } from "react-router";

//PAGES
import Home from "./pages/Home";
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact'

//COMPONENTS
import NavBar from "./components/NavBar"
import Footer from "./components/Footer"



function App() {
  return (
    <div className="App">

      <BrowserRouter>
      <a class="btn-whatsapp" href="https://w.app/superlimp" >
      <i class="fa fa-whatsapp"></i>
      </a>
        <NavBar/>   {/*Components*/} <br /> <br />
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/services" element={<Services />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/about" element={<About />} />
          </Routes> 
          <Footer/>
        </BrowserRouter>
        
    </div>
  );
}

export default App;
