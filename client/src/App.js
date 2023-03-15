import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home';
import Register from './components/Register';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/home' exact element={ <Home/> } />
        <Route path='/register' element={ <Register/> } />
      </Routes>
    </Router>
  );
}

export default App;
