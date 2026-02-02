import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Learn from './pages/Learn';
import Quiz from './pages/Quiz';
import Play from './pages/Play';
import Result from './pages/Result';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/learn" element={<Learn />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/play" element={<Play />} />
        <Route path="/result" element={<Result />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
