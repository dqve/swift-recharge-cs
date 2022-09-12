import React, { useState } from 'react';
import ScrollAnimation from "react-animate-on-scroll";

import appstore from '../../assets/img/applestore.svg';
import googlestore from '../../assets/img/googlestore.svg';

export default function Modal({ modal, setModal }) {


    const changeHandler = () => nulll

    return (

        <section className="modal" style={{ display: modal ? "block" : "none", background: "#00587edf"}}>

            <div className="modal--inner"  onClick={() => setModal(false)}  >
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
                                <h3 className="qr-info">Something amazing is coming soon.</h3>
                                <div className='row store-img'>
                                    <img src={appstore} alt="WOTA - Home" className='col-md-4' />
                                    <img src={googlestore} alt="WOTA - Home" className='col-md-4' />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    )
}
