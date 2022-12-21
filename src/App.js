import React from 'react';
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import HomePage from './components/HomePage'
import Creators from './components/Creators'
import LandingPage from './components/LandingPage'
import Membership from './components/Membership'
import 'antd/dist/reset.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/getting-started' element = {<HomePage/>} />
        <Route path='/creators' element = {<Creators/>}/>
        <Route path='/' element = {<LandingPage/>} />
        <Route path='/membership' element = {<Membership/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
