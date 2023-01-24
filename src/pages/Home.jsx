import React from 'react';
import Header from '../components/Header';
import Main from '../components/Main';
import Phrase from '../components/Phrase';
import About from '../containers/About';
import Testimonios from '../containers/Testimonios';
import Services from '../components/Services';

const Home = () => {
    return (
        <div>
            <Header />
            <Main />
            <Phrase />
            <About />
        </div>
    );
}

export default Home;