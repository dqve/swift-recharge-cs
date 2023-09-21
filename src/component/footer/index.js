import React, { useState } from 'react'
import StoreModal from "../storeModal";

import appStore from '../../assets/img/app-store.svg';
import googlePlay from '../../assets/img/google-play.svg';
import mockPhone from '../../assets/img/mock-rocket.png';
import InIcon from '../../assets/img/socials/ln.svg';
import IwIcon from '../../assets/img/socials/tw.svg';
import IgIcon from '../../assets/img/socials/ig.svg';
import ImIcon from '../../assets/img/socials/em.svg';

import logoOne from '../../assets/img/wota-logo-1.svg';

import { Link as Scroll } from 'react-scroll'


export default function Footer({ setNav }) {

    const [storeModal, setStoreModal] = useState(false)

    return (
        <>
            <StoreModal modal={storeModal} setModal={setStoreModal} />

            <div id="sec-9" className='section-six'>
                <div className='nine-inner row'>
                    <div className='col-md-6 two-text'>
                        <div className="">
                            <h3 className='two-header fade-in-in'>One Solution for All Your Bills and Airtime Payments</h3>
                            <div className="nine-buttons">
                                <div className="apps-button">
                                    <a rel="noopener noreferrer" className="text" href="https://play.google.com/store/apps/details?id=com.techtemple.swiftrecharge" target="_blank" style={{color: "rgb(250, 250, 250)"}}><img src={appStore} alt="Card Icon" /></a>
                                    </div>
                                <div className="apps-button">
                                    <a rel="noopener noreferrer" className="text" href="https://play.google.com/store/apps/details?id=com.techtemple.swiftrecharge" target="_blank" style={{color: "rgb(250, 250, 250)"}}><img src={googlePlay} alt="Card Icon" /></a>
                                    </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-5 sec-notif '>
                        <img src={mockPhone} alt="Card Icon" />
                    </div>
                </div>
            </div>

            <footer className="footer">

                <div className="row footer-one">
                    <div className=" col-md-4 footer-lists inner_footer_1">
                        <Scroll to="home" spy={true} smooth={true} className="footer__list" onClick={() => setNav("home")}>Home</Scroll>
                        <Scroll to="sec-2" spy={true} smooth={true} className="footer__list">About</Scroll>
                        <Scroll to="sec-1" spy={true} smooth={true} className="footer__list">Brands</Scroll>
                        <Scroll to="sec-8" spy={true} smooth={true} className="footer__list">Support</Scroll>
                    </div>
                    <div className=" col-md-3 d-flex justify-content-center">
                        <div className="logo-container">
                            <div onClick={() => setNav("home")}>
                                <img src={logoOne} alt="Swift Recharge - Home" />
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 footer-lists inner_footer_2">
                        <div onClick={() => setStoreModal(true)} className="footer__list">Contact Us</div>
                        <div onClick={() => setNav("pandp")} className="footer__list">Privacy Policy</div>
                        <div onClick={() => setNav("tandc")} className="footer__list">Terms &amp; Condition</div>
                    </div>

                </div>

                <div className="footer-two">
                    <div className="socials">
                        <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer"><img src={InIcon} alt="Swift Recharge - Home" /></a>
                        <a href="https://twitter.com" target="_blank" rel="noreferrer"><img src={IwIcon} alt="Swift Recharge - Home" /></a>
                        <a href="https://www.instagram.com/" target="_blank" rel="noreferrer"><img src={IgIcon} alt="Swift Recharge - Home" /></a>
                        <a href="mailto:support@swiftrecharge.ng" target="_blank" rel="noreferrer"><img src={ImIcon} alt="Swift Recharge - Home" /></a>
                    </div>
                    <div>
                        <p className="footer-rights">©Swift Recharge  {new Date().getFullYear()}. All rights reserved.</p>
                    </div>

                </div>

            </footer>

        </>
    )
}
