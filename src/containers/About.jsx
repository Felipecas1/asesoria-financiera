import React from 'react';
import Me from '../components/Me';
import Header from '../components/Header';
import '../styles/About.css';

const About = () => {
    return (
        <div>
            <Me />
            <h4 className='tittle-about'>Revisa el menu para más información</h4>
        </div>
    );
}

export default About;