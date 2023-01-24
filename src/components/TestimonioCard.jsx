import React from 'react';
import '../styles/TestimonioCard.css';

const TestomioCard = () => {
    return (
        <div>
            <main className='container'>
                <section className="container-fluid card-container">
                    <div className="mt-3 img-background">
                        <img src="https://miwally.com/wp-content/uploads/2022/04/como-poner-en-marcha-un-negocio-1.png" alt="Foto emprendimiento" />
                    </div>
                    <div className="card-body card-info">
                        <h5 className="fw-bold card-tittle">Alberto - Emprendedor</h5>
                        <p>"Conocer a Juan Jacobo me abrio la mente para administar mucho mejor mis finanzas y crecer con mi negocio".</p>
                        <p className="text-center perfil"><span className='usuario'>@cafestino</span></p>
                    </div>
                    <button className="btn btn-primary button btn-lg">
                        Quiero este servicio
                    </button>
                </section>
                <section className="container-fluid card-container">
                    <div className="mt-3 img-background">
                        <img src="https://as01.epimg.net/deporteyvida/imagenes/2019/02/20/portada/1550685264_115200_1550686292_noticia_normal.jpg" alt="Foto emprendimiento" />
                    </div>
                    <div className="card-body card-info">
                        <h5 className="fw-bold card-tittle">Ana y Luis - Viaje</h5>
                        <p>"A partir de que empezamos a organizarnos en nuestras finanzas, cumplimos los objetivos que no habiamos podido realizar. Hoy recomiendo a Juan Jacobo desde los montes de yoshia."</p>
                        <p className="text-center perfil"><span className='usuario'>@viajandojuntos</span></p>
                    </div>
                    <button className="btn btn-primary button btn-lg">
                        Quiero este servicio
                    </button>
                </section>
                <section className="container-fluid card-container">
                    <div className="mt-3 img-background">
                        <img src="https://hablemosdedinero.com.mx/public/img/10245-pasos-para-comprar-una-casa-en-pareja-1.jpg" alt="Foto emprendimiento" />
                    </div>
                    <div className="card-body card-info">
                        <h5 className="fw-bold card-tittle">Camila y Juan - Casa</h5>
                        <p>"Definitivamente, tomar la decision de tener un control en nuestras finanzas fue el detonante de tener nuestra casa, muchas gracias Juan Jacobo."</p>
                        <p className="text-center perfil"><span className='usuario'>@juanjacobo</span></p>
                    </div>
                    <button className="btn btn-primary button btn-lg">
                        Quiero este servicio
                    </button>
                </section>
            </main>
            <a href="/" className='returnlink'>Come back to home</a>
        </div>
    );
}

export default TestomioCard;