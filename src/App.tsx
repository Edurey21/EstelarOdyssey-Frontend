import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './pages/Home';
import AddSuggestion from './pages/AddSuggestion';
import ViewSuggestions from './pages/ViewSuggestions';
import './css/App.css';

const App: React.FC = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Inicio</Link>
            </li>
            <li>
              <Link to="/add-suggestion">Dar una Sugerencia</Link>
            </li>
            <li>
              <Link to="/view-suggestions">Ver Sugerencias</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add-suggestion" element={<AddSuggestion />} />
          <Route path="/view-suggestions" element={<ViewSuggestions />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
