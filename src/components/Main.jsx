import React from 'react';
import flechita from '../assets/icons/flechita.svg';
import main_banner from '../assets/images/main_banner.jpg';
import '../styles/Main.css';

const Main = () => {
    return (
        <section id="hero">
            <div className='main-container'>
                <div className="image-main" >
                    <img src={main_banner} alt="main banner"  id="banner" />
                </div>
                <div className="info-container">
                    <h1>¿Estas listo para avanzar en tu vida financiera?</h1>
                    <img src={flechita} alt="down arrow" id='flecha'/>
                </div>
            </div>
        </section>
    );
}

export default Main;