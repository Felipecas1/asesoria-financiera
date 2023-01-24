import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from '../pages/Home';
import NotFound from '../pages/NotFound';
import Forms from '../components/Forms';
import Testimonios from '../containers/Testimonios';
import Services from '../components/Services';

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='*' element={<NotFound />} />
                <Route path='/testimonios' element={<Testimonios />} />
                <Route path='/services' element={<Services />} />
                <Route path='/forms' element={<Forms />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;