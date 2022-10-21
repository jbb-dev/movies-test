import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Contact from './Contact';
import DetailMovie from './DetailMovie';
import Header from './Header';
import Home from './Home';
import ListMovies from './ListMovies';

const Router = () => {
  return (
    <BrowserRouter>
        <Header />
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/films' element={<ListMovies />} />
            <Route path='/films/:id' element={<DetailMovie />} />
            <Route path='/contact' element={<Contact />} />
        </Routes>
    </BrowserRouter>
  );
};

export default Router;