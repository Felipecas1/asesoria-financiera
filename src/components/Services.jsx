import React from 'react';
import Header from './Header';
import '../styles/Services.css'

const Services = () => {
    return (
        <div>
            <Header />
            <div className='general-conta'>
                <div className='table-conta'>
                    <h3>El cobro por nuestros servicios...</h3>
                    <table class="table table-dark table-striped">
                        <thead>
                            <tr>
                            <th scope="col">Tipo</th>
                            <th scope="col">Tiempo</th>
                            <th scope="col">Precio</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                            <th scope="row">Persona Natural</th>
                            <td>por hora</td>
                            <td>$60.000</td>
                            </tr>
                            <tr>
                            <th scope="row">Empresa</th>
                            <td>por hora</td>
                            <td>$110.000</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className='info-asesoria'>
                    <p>
                        Recibiras todo el acompañamiento de mi parte para que logres ser un experto o experta en el manejo de dinero. Son clases privadas y llenas de ejemplos diarios para un mejor entendimiento.
                    </p>
                    <p>
                        ¡¡Da el paso y toma las riendas tus finanzas!!
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Services;