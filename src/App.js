import './styles/App.css';
import './styles/custom.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import NotFound404 from "./pages/NotFound404";


export default function App() {
  return (

    <Router>
      <Header />

      <main id="main" className="container py-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="*" element={<NotFound404 />} />
        </Routes>
      </main>

      <Footer />
    </Router>
  );
}