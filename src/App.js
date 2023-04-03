import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';

import Home from './routes/Home';
import Country from './routes/Country';

const App = () => {

  return (
    <div className="App">
      <Header />
      <Router>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/country/*' element={<Country />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
