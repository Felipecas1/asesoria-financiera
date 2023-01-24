import React from 'react';
import Header from '../components/Header';
import '../styles/Forms.css';

const Forms = () => {
    return (
        <div>
            <Header />
                <div className="general">
                    <div className='container row px-4 form-data col md-8 lg-6 xs-12 mx-auto p-5'>
                        <div className="card-body mb-3 mt-md-4">
                            <form className="form mb-5" action="https://formspree.io/f/mgebvjgj" method="POST">
                                <div className='form'>
                                    <div className="mb-3" controlId="Name">
                                        <label className="form-label text-center">
                                            Name
                                        </label>
                                        <input className='form-control' type="text" placeholder="Enter Name" />
                                    </div>
                                    <div className="form-group mb-3" controlId="formBasicEmail">
                                        <label className="form-label text-center">
                                            Email address
                                        </label>
                                        <input className='form-control' type="email" placeholder="Enter email" />
                                    </div>
                                </div>
                                <div class="mb-3">
                                    <label for="exampleFormControlTextarea1" class="form-label">Write a message with the service you want</label>
                                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                                </div>
                                <div className='config-button'>
                                    <button className='btn btn-primary button btn-lg mx-auto' variant="primary" type="submit">
                                        Send message
                                    </button>
                                </div>
                            </form>
                            <a href="/" className='return'>Come back to home</a>
                        </div>
                    </div>
                </div>
        </div>
    )
}

export default Forms;