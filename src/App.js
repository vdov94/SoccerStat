import './App.css';
import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from 'react-router-dom';

import Competitions from './components/Competitions';
import Sample from './components/Sample';

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Sample />}>
          <Route path="/" element={<Navigate to="competitions" />} />
          <Route path="competitions" element={<Competitions path="competitions" />} />
          <Route path="teams" element={<Competitions path="teams" />} />
          <Route path = "*" element={<h1>Матчи не найдены</h1>}/>
        </Route>
      </Routes>
    </Router>

  );
}

export default App;
