import React from 'react';
import './varDefinitions.css';
import './App.css';
import './styles.scss';

import TopLine from './components/Topline'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './pages/HeadSKaT'
import ShowActualPage from './components/ShowActualPage'
import AboutUsPage from './pages/AboutUsPage'
import ErrorPage from './pages/ErrorPage'

// Here we go..
function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <TopLine />

          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<AboutUsPage />} />
            <Route path='/electronics' element={<ShowActualPage productLine = "electronics" />} />
            <Route path='/jewelery' element={<ShowActualPage productLine = "jewelery" />} />
            <Route path='/mensclothes' element={<ShowActualPage productLine = "men's clothing" />} />
            <Route path='/womensclothes' element={<ShowActualPage productLine = "women's clothing" />} />
            <Route path='*' element={<ErrorPage />}  />
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
