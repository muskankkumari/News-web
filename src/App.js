import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Projects/Project01/Navbar/Navbar";
import { BrowserRouter, Router, Routes, Route } from "react-router-dom";
import Home from "./Projects/Project01/Home/Home";
import Category from "./Projects/Project01/Category/Category";
import Footer from "./Projects/Project01/Footer/Footer";
const App = () => {
  
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sports" element={<Category name="sports" />} />
        <Route path="/business" element={<Category name="business" />} />
        <Route path="/science" element={<Category name="science" />} />
        <Route path="/entertainment" element={<Category name="entertainment" />} />
        <Route path="/health" element={<Category name="health" />} />
        <Route path="/technology" element={<Category name="technology" />} />
        <Route path="/sports" element={<Category name="sports" />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
};

export default App;
