import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Tvshows from './pages/Tvshows';
import Home from './pages/Home';
import About from './pages/About';
import Privacypolicy from './pages/Privacypolicy';

function App() {
  return (
    <div className="content">
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tvshows" element={< Tvshows />} />
          <Route path="/about" element={<About />} />
          <Route path="/Privacypolicy" element={<Privacypolicy />} />
        </Routes>
      </BrowserRouter>
      </div>
  );
}

export default App;
