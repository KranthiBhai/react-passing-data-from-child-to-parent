import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import ParentToChild from './ParentToChild';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<ParentToChild />} />
      </Routes>
    </div>
  );
}

export default App;
