import React, { useState } from 'react'
import Modal from "../modal";

import logoOne from '../../assets/img/wota-logo-1.svg';

import { Link as Scroll } from 'react-scroll'


export default function Header() {

    const [menu, setMenu] = useState(false)

    const [modal, setModal] = useState(false)

    return (
        <>
            <Modal modal={modal} setModal={setModal} />

            <header id="home" className="header">
                <div className="header__inner">
                    <nav className="nav animated fadeInUp delay00">
                        {/* Logo */}
                        <div className="logo-container">
                            <a href="#" aria-current="page">
                                <img src={logoOne} alt="WOTA - Home" />
                            </a>
                        </div>

                        {/* lists */}
                        <ul className="nav__lists">
                            <li className="nav__list">
                                <Scroll to="sec-1" spy={true} smooth={true} className="nav__link">About</Scroll>
                            </li>
                            <li className="nav__list">
                                <Scroll to="sec-4" spy={true} smooth={true} className="nav__link">Brands</Scroll>
                            </li>
                            <li className="nav__list">
                                <Scroll to="sec-7" spy={true} smooth={true} className="nav__link">Support</Scroll>
                            </li>
                        </ul>
                        <div className="hero-content-button button-container">
                            <button className="play-button" onClick={() => setModal(true)} >Register</button>
                        </div>

                        {/* Mobile navigation */}
                        <div className="mobile__nav">
                            <div className={`nav-contents`}>
                                {/* mobile logo */}
                                <div>
                                    <img src={logoOne} className="mobile-ham-logo" alt="WOTA - Home" />
                                </div>
                                {/* end of mobile logo */}
                                {/* mobile lists */}
                                <ul>
                                    <li className="mobile__list">
                                        <Scroll to="hero" spy={true} smooth={true} className="mobile__link">Home</Scroll>
                                    </li>
                                    <li className="mobile__list">
                                        <Scroll to="sec-1" spy={true} smooth={true} className="mobile__link">About</Scroll>
                                    </li>
                                    <li className="mobile__list">
                                        <Scroll to="sec-4" spy={true} smooth={true} className="mobile__link">Brands</Scroll>
                                    </li>
                                    <li className="mobile__list">
                                        <Scroll to="sec-7" spy={true} smooth={true} className="mobile__link">Support</Scroll>
                                    </li>
                                    <li className="mobile__list">
                                        <a href="#" className="mobile__link">Terms &amp; Conditions</a>
                                    </li>
                                    <li className="mobile__list">
                                        <a href="#" className="mobile__link">Privacy Policy</a>
                                    </li>
                                </ul>
                                {/* end of mobile lists */}
                                <div className={`hamburger modal--set ${menu ? "active" : ""}`} onClick={() => setMenu(!menu)}>
                                    <span></span>
                                    <span></span>
                                </div>

                            </div>
                            {/* Mobile navigation */}
                            <div className="mobile__nav">
                                <div className={`nav-contents ${menu ? "activate" : ""}`}>
                                    {/* mobile logo */}
                                    <a href="#" aria-current="page">
                                        <img src={logoOne} className="mobile-ham-logo" alt="WOTA - Home" />
                                    </a>
                                    {/* end of mobile logo */}
                                    {/* mobile lists */}
                                    <ul>
                                        <li className="mobile__list">
                                            <Scroll onClick={() => setMenu(false)} to="hero" spy={true} smooth={true} className="mobile__link">Home</Scroll>
                                        </li>
                                        <li className="mobile__list">
                                            <Scroll onClick={() => setMenu(false)} to="sec-1" spy={true} smooth={true} className="mobile__link">About</Scroll>
                                        </li>
                                        <li className="mobile__list">
                                            <Scroll onClick={() => setMenu(false)} to="sec-4" spy={true} smooth={true} className="mobile__link">Brands</Scroll>
                                        </li>
                                        <li className="mobile__list">
                                            <Scroll onClick={() => setMenu(false)} to="sec-7" spy={true} smooth={true} className="mobile__link">Support</Scroll>
                                        </li>
                                        <li className="mobile__list">
                                            <a onClick={() => setMenu(false)} href="#" className="mobile__link">Terms &amp; Conditions</a>
                                        </li>
                                        <li className="mobile__list">
                                            <a onClick={() => setMenu(false)} href="#" className="mobile__link">Privacy Policy</a>
                                        </li>
                                        <li className="mobile__list">
                                            <div className="hero-content-button">
                                                <button className="play-button" onClick={() => setModal(true)} >Register</button>
                                            </div>
                                        </li>
                                    </ul>
                                    {/* end of mobile lists */}

                                </div>
                                {/* mobile hamburger */}
                                <div className={`hamburger modal--set ${menu ? "active" : ""}`} onClick={() => setMenu(!menu)}>
                                    <span></span>
                                    <span></span>
                                </div>
                                {/* end of mobile hamburger */}
                            </div>
                            {/* End of mobile navigation */}
                        </div>
                        {/* End of mobile navigation */}
                    </nav>
                </div>
            </header>
        </>

    )
}
