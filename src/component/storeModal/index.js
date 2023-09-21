import React, { useState } from 'react';


import appstore from '../../assets/img/applestore.svg';
import googlestore from '../../assets/img/googlestore.svg';
import { Link } from 'react-router-dom';

export default function Modal({ modal, setModal }) {


    const changeHandler = () => nulll

    return (

        <section className="modal" style={{ display: modal ? "block" : "none", background: "#F0701030" }}>

            <div className="modal--inner" onClick={() => setModal(false)}  >
                <div className="modal--content modal--store">
                    <div className="qr_container">

                        {/* hamburger */}
                        <div className="modal--cancel modal--set" onClick={() => setModal(false)}>
                            <span></span>
                            <span></span>
                        </div>
                        {/* end of hamburger */}

                        <div className="form">
                            <div className='store-inner'>
                                <h3 className="qr-info">Contact Us</h3>
                                <div className='row '>
                                    <p>
                                        <a href="mailto:support@swiftrecharge.ng" target="_blank" rel="noreferrer">
                                            Contact email: support@swiftrecharge.ng</a>

                                    </p>
                                    <p>
                                        <a href="tel:+2349055560494" target="_blank" rel="noreferrer">
                                            Phone: 0905 556 0494</a>
                                    </p>
                                    <p>
                                        Address: lekki, Lagos Nigeria
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    )
}
