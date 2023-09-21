import React, { useState } from 'react'
import Modal from "../modal";

import logoOne from '../../assets/img/wota-logo-1.svg';

import { Link as Scroll } from 'react-scroll'


export default function Header({ nav, setNav }) {

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
                                <img src={logoOne} alt="Swift Recharge - Home" />
                            </a>
                        </div>

                        {/* lists */}
                        <ul className="nav__lists">
                            {nav !== "home" ?
                                <li className="nav__list">
                                    <div className="nav__link" onClick={() => setNav("home")}>Home</div>
                                </li>
                                : null
                            }
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

                            <Scroll to="sec-6" spy={true} smooth={true} className="">
                            <button className="play-button">Get App</button>
                            </Scroll>

                        </div>

                        {/* Mobile navigation */}
                        <div className="mobile__nav">
                            <div className={`nav-contents`}>
                                {/* mobile logo */}
                                <div>
                                    <img src={logoOne} className="mobile-ham-logo" alt="Swift Recharge - Home" />
                                </div>
                                {/* end of mobile logo */}
                                {/* mobile lists */}
                                <ul>
                                    <li className="mobile__list">
                                        <div className="mobile__link" onClick={() => setNav("home")}>Home</div>
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
                                        <div className="mobile__link" onClick={() => setNav("home")}>Home</div>
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
                                        <img src={logoOne} className="mobile-ham-logo" alt="Swift Recharge - Home" />
                                    </a>
                                    {/* end of mobile logo */}
                                    {/* mobile lists */}
                                    <ul>
                                        <li className="mobile__list">
                                            <Scroll onClick={() => {setMenu(false);setNav("home")}} to="hero" spy={true} smooth={true} className="mobile__link">Home</Scroll>
                                        </li>
                                        <li className="mobile__list">
                                            <Scroll onClick={() => setMenu(false)} to="sec-2" spy={true} smooth={true} className="mobile__link">About</Scroll>
                                        </li>
                                        <li className="mobile__list">
                                            <Scroll onClick={() => setMenu(false)} to="sec-1" spy={true} smooth={true} className="mobile__link">Brands</Scroll>
                                        </li>
                                        <li className="mobile__list">
                                            <Scroll onClick={() => setMenu(false)} to="sec-8" spy={true} smooth={true} className="mobile__link">Support</Scroll>
                                        </li>
                                        <li className="mobile__list">
                                        <div className="mobile__link" onClick={() => {setMenu(false);setNav("tandc")}}>Terms &amp; Conditions</div>
                                        </li>
                                        <li className="mobile__list">
                                        <div className="mobile__link" onClick={() => {setMenu(false);setNav("pandp")}}>Privacy Policy</div>
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
