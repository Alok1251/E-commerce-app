import React from 'react';
import './App.css';
import Homepage from './pages/homepage/homepage.component';
import { Routes,Route } from 'react-router-dom';

const Hatspage = (props) => (
  <div>
    <h1>hats page</h1>
  </div>
)

function App() {
  return (
    <Routes>
      <Route exact path='/' Component={Homepage} />
      <Route exact path='/hats' Component={Hatspage} />
    </Routes>
  );
}

export default App;
