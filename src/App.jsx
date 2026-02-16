import React from "react";
import "./App.css";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Product from "./pages/Product";
import Contact from "./pages/Contact";
import Cement from "./pages/Cement";
import Steel from "./pages/Steel";
import Paint from "./pages/Paint";
import Aggregates from "./pages/Aggregates";
import Bricks from "./pages/Bricks";
import Electrical from "./pages/Electrical";
import Hardware from "./pages/Hardware";
import ScrollToTop from "./components/ScrollToTop"

function App() {
  return (
    <>
      <BrowserRouter>
       <ScrollToTop/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Product />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/products/cement" element={<Cement />} />
          <Route path="/products/steel" element={<Steel />} />
          <Route path="/products/paint" element={<Paint />} />
          <Route path="/products/aggregates" element={<Aggregates/>} />
           <Route path="/products/bricks" element={<Bricks/>} />
            <Route path="/products/electrical" element={<Electrical/>} />
             <Route path="/products/hardware" element={<Hardware/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
