import React from 'react';
import './App.css';
import { Routes, Route} from 'react-router-dom';
import PatientProfile from '../PatientProfile';
import Home from './Home';

function App() {

  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/patients/:id" element={<PatientProfile />} />
      </Routes>
    </div>
  );
}

export default App;
