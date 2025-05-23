import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Admission from './pages/Admission';
import Contact from './pages/Contact';
import Footer from './components/Footer';
import './style.css';

function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/admission" element={<Admission />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />  {/* Add Footer here */}
    </Router>
  );
}

export default App;
