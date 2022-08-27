import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import ServiceList from './components/ServiceList';
import ServiceWot from './components/ServiceWot';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home';

function App() {
  return (

    <Routes >
      <Route path='/' element={<Home />} />
      <Route path='/Service' element={<ServiceList />} />
      <Route path='/Service/:id' element={<ServiceWot />} />
    </Routes>

  );
}

export default App;
