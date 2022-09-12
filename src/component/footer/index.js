import React, { useState } from 'react'
import StoreModal from "../storeModal";


import InIcon from '../../assets/img/socials/ln.svg';
import IwIcon from '../../assets/img/socials/tw.svg';
import IgIcon from '../../assets/img/socials/ig.svg';
import ImIcon from '../../assets/img/socials/em.svg';

import logoOne from '../../assets/img/wota-logo-1.svg';

import { Link as Scroll } from 'react-scroll'


export default function Footer() {

    const [storeModal, setStoreModal] = useState(false)

    return (
        <>
            <StoreModal modal={storeModal} setModal={setStoreModal} />

            <div id="sec-8" className='section-six'>
                <div className='six-inner row'>
                    <div className='col-md-7 two-text'>
                        <div>
                            <h3 className='two-header fade-in-in'>Defeat thirst get WOTA.</h3>
                        </div>
                    </div>
                    <div className='col-md-4 two-button'>
                        <button className='app-button appear-in' onClick={() => setStoreModal(true)}><span>App Store</span><span className='img'></span></button>
                        <button className='play-button appear-in' onClick={() => setStoreModal(true)}><span>Play Store</span><span className='img'></span></button>
                    </div>
                </div>
            </div>


            <footer className="footer">

                <div className="row footer-one">
                    <div className=" col-md-4 footer-lists inner_footer_1">
                        <Scroll to="home" spy={true} smooth={true} className="footer__list">Home</Scroll>
                        <Scroll to="sec-1" spy={true} smooth={true} className="footer__list">About</Scroll>
                        <Scroll to="sec-4" spy={true} smooth={true} className="footer__list">Brands</Scroll>
                        <Scroll to="sec-7" spy={true} smooth={true} className="footer__list">Support</Scroll>
                    </div>
                    <div className=" col-md-3 d-flex justify-content-center">
                        <div className="logo-container">
                            <a href="#" aria-current="page">
                                <img src={logoOne} alt="WOTA - Home" />
                            </a>
                        </div>
                    </div>
                    <div className="col-md-4 footer-lists inner_footer_2">
                        <div onClick={() => setStoreModal(true)} className="footer__list">Mobile App</div>
                        <a href="#" className="footer__list">Privacy Policy</a>
                        <a href="#" className="footer__list">Terms &amp; Conditions</a>
                    </div>

                </div>

                <div className="footer-two">
                    <div className="socials">
                        <a href="https://www.linkedin.com/company/worldofthirst/" target="_blank" rel="noreferrer"><img src={InIcon} alt="WOTA - Home" /></a>
                        <a href="https://twitter.com/WorldofThirst" target="_blank" rel="noreferrer"><img src={IwIcon} alt="WOTA - Home" /></a>
                        <a href="https://www.instagram.com/worldofthirstapp/" target="_blank" rel="noreferrer"><img src={IgIcon} alt="WOTA - Home" /></a>
                        <a href="mailto:support@pairwota.com" target="_blank" rel="noreferrer"><img src={ImIcon} alt="WOTA - Home" /></a>
                    </div>
                    <div>
                        <p className="footer-rights">© WOTA {new Date().getFullYear()}. All rights reserved.</p>
                    </div>

                </div>

            </footer>

        </>
    )
}
