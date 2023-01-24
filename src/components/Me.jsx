import React from 'react';
import '../styles/Me.css';

const About = () => {
    return (
        <div className="me">
            <div className="about">
                <p>Soy Juan Jacobo, financiero con más de 10 años de experiencia ayudando y formando a miles de personas alrededor de toda Colombia.
                </p>
                <p>
                Mi propósito es enseñarte mis trucos secretos para que puedas tomar mejores decisiones con tu dinero y puedas planificarte en futuro por lo que realmente importa.
                </p>
                <p>
                Soy profesional especializado en finanzas familiares. Utilizo mis conocimientos financieros para crear estrategias y soluciones de inversión concretas las cuales se ajusten y podamos obtener mejores rendimientos.
                </p>
                <p>
                Si decides que te enseñe como puedes controlar mejor tus finanzas, YO me comprometo a entrenarte y motivar tu mente para que puedas lograr los objetivos financieros que te propongas.
                </p>
            </div>
            <div className="foto">
                <img src="https://images.pexels.com/photos/3760263/pexels-photo-3760263.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Foto personal" />
            </div>
        </div>
    );
}

export default About;