import {
  MouseParallaxChild,
  MouseParallaxContainer
} from "react-parallax-mouse";
import "./App.css";
import './waves.css';
import React, { useState, useEffect } from 'react';
import ScrollAnimation from "react-animate-on-scroll";
import ModalVideo from 'react-modal-video'
import * as Scroller from 'react-scroll'
import { Link as Scroll } from 'react-scroll'

import Modal from "./component/modal";
import StoreModal from "./component/storeModal";
import TandC from "./component/TandC";
import PandP from "./component/PandP";

import Header from "./component/header";
import Footer from "./component/footer";

import logoOne from './assets/img/wota-logo-1.svg';
import heroImage from './assets/img/hero-img.svg';
import oneImg from './assets/img/one-img.svg';
import wotaDivBg from './assets/img/wota-div-bg.svg'

import brandOne from './assets/img/logos/ap.png';
import brandTwo from './assets/img/logos/cp.png';
import brandThree from './assets/img/logos/pi.png';
import brandFour from './assets/img/logos/sa.png';
import brandFive from './assets/img/logos/snk.png';
import brandSix from './assets/img/brand-one.svg';

import InIcon from './assets/img/socials/ln.svg';
import IwIcon from './assets/img/socials/tw.svg';
import IgIcon from './assets/img/socials/ig.svg';
import ImIcon from './assets/img/socials/em.svg';

import mockup from './assets/img/mock-up.svg';
import chat from './assets/img/chat.svg';
import { ReactComponent as Bubbles } from "./assets/img/bubbles.svg";

import expActive from './assets/img/exp-active.svg';
import expGeneral from './assets/img/exp-general.svg';
import expProbe from './assets/img/exp-probe.svg';
import { setTimeout } from "timers";


export default function App() {


  const [menu, setMenu] = useState(false)

  const [nav, setNav] = useState("home")

  const [storeModal, setStoreModal] = useState(false)

  const [modal, setModal] = useState(false)

  const [isOpen, setOpen] = useState(false)

  const [loading, setLoading] = useState(true)

  useEffect(() => {

    setTimeout(() => {
      setLoading(false)
    }, 2500);

    return () => null
  }, [])

  React.useEffect(() => {
    Scroller.animateScroll.scrollToTop()
  }, [])

  const Home = () => (
    <>
      <div id="hero" className='hero'>
        <div className='hero-inner row'>

          <div className='col-md-5 hero-text'>
            <div>
              <h2 className='hero-header fade-in-in'>Water purchase<br />
                made easy, <span>convenient</span><br />
                and fast.</h2>
              <p className='hero-content fade-in-in'>Reduces the time and effort required to fullfill your water
                demands. Create water order probes on the fly.</p>
              <div className='hero-content-button appear-in'>
                <button className='app-button' onClick={() => setStoreModal(true)} >App store</button>
                <button className='play-button' onClick={() => setStoreModal(true)} >Play store</button>
              </div>
            </div>
          </div>

          <div className='col-md-6 hero-img appear-in'>
            <MouseParallaxContainer
              className="parallax"
              containerStyles={{
                width: "100%"
              }}
              resetOnLeave
            >
              <MouseParallaxChild
                factorX={0.05}
                factorY={0.05}
                updateStyles={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "1.25rem"
                }}>
                <img src={heroImage} alt="WOTA - Home" className="appear-in" />
              </MouseParallaxChild>
            </MouseParallaxContainer>
          </div>
        </div>

        {/* --Waves Container-- */}
        <div className="waves-container">
          <svg className="waves" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"
            viewBox="0 24 150 28" preserveAspectRatio="none" shape-rendering="auto">
            <defs>
              <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
            </defs>
            <g className="parallax">
              <use xlinkHref="#gentle-wave" x="48" y="0" fill="rgba(234,250,255,0.7" />
              <use xlinkHref="#gentle-wave" x="48" y="3" fill="rgba(234,250,255,0.5)" />
              <use xlinkHref="#gentle-wave" x="48" y="5" fill="rgba(234,250,255,0.3)" />
              <use xlinkHref="#gentle-wave" x="48" y="7" fill="#EAFAFF" />
            </g>
          </svg>
        </div>
        {/* --Waves end-- */}

      </div>

      <div id="sec-1" className='section-one'>
        <div className='one-inner row'>
          <div className='col-md-5 one-text'>
            <div className="position-relative text-container">
              <h2 className='one-header fade-in-in'>Easily find and purchase water
                products from water sellers around you.</h2>
              <p className='one-content fade-in-in'>Search and match with water merchants within minutes.</p>
            </div>
          </div>
          <div className='col-md-6 one-img'>
            <img src={oneImg} alt="WOTA - Home" className="appear-in" onClick={() => setOpen(true)} />
          </div>
        </div>
      </div>

      <div id="sec-2" className='section-four'>
        <div className='four-inner row'>
          <div className='col-md-5 four-img'>
            <img src={chat} alt="WOTA - Home" />
          </div>
          <div className='col-md-6 four-text'>
            <div className="position-relative text-container">
              <h2 className='four-header fade-in-in'>Simple, Effective, Fast and Rewarding.</h2>
              <p className='four-content fade-in-in'>Our simplified onboarding process coupled with the two clicks ordering system has been carefully designed to give you an effective,  fast and rewarding water purchase experience.</p>
            </div>
          </div>
        </div>
      </div>

      <div id="sec-3" className='section-two'>
        <div className='two-inner row'>
          <div className='col-md-7 two-text appear-in'>
            <div>
              <h3 className='two-header'>Ready to jumpstart your water distribution?
                Become a partner today and serve your customers better!</h3>
            </div>
          </div>
          <div className='col-md-4 two-button appear-in'>
            <button className='register-button' onClick={() => setModal(true)}><span>Register</span><span className='img'></span></button>
          </div>
        </div>
      </div>

      <div id="sec-4" className='section-three'>
        <div className='three-inner'>
          <div className='three-text fade-in-in'>
            <h2 className='three-header'>Connected brands</h2>
            <p className='three-content'>We connect you to a network of water producers from different countries in different cities around the world, we are trusted by companies both large and small.</p>
          </div>
          <div className='three-img appear-in'>
            <div>
              <div className='row logos-col'>
                <div className='col-4 col-md-2'>
                  <img src={brandOne} alt="WOTA - Home" className="logos" />
                </div>
                <div className='col-4 col-md-2'>
                  <img src={brandTwo} alt="WOTA - Home" className="logos" />
                </div>
                <div className='col-4 col-md-2'>
                  <img src={brandThree} alt="WOTA - Home" className="logos" />
                </div>
                <div className='col-4 col-md-2'>
                  <img src={brandFour} alt="WOTA - Home" className="logos" />
                </div>
                <div className='col-4 col-md-2'>
                  <img src={brandFive} alt="WOTA - Home" className="logos" />
                </div>
              </div>
              {/* <div className='row'>
                  <div className='col-sm-3 p-4 ps-5'>
                    <img src={brandFour} alt="WOTA - Home" className="logos" />
                  </div>
                  <div className='col-sm-3 p-4 ps-5'>
                    <img src={brandFive} alt="WOTA - Home" className="logos" />
                  </div>
                  <div className='col-sm-3 p-4 ps-5'>
                    <img src={brandSix} alt="WOTA - Home" className="logos" />
                  </div>
                  <div className='col-sm-2'>
                    <img src={brandOne} alt="WOTA - Home" />
                  </div>
                </div> */}
            </div>
          </div>
        </div>
      </div>

      <div id="sec-5" className='section-four'>
        <div className='four-inner row'>
          <div className='col-md-5 four-text'>
            <div className="position-relative text-container">
              <h2 className='four-header fade-in-in'>Buy water with ease and comfort anywhere and anytime.</h2>
              <p className='four-content fade-in-in'>Buying or selling water shouldn't be a hassle thats why the world of thirst app has made it easier for water producers to market and sell their products to a world of ever thirsty consumers.</p>

            </div>
          </div>
          <div className='col-md-6 four-img'>
            <img src={mockup} alt="WOTA - Home" className="appear-in" />
          </div>
        </div>
      </div>

      <div id="sec-6" className='section-five'>
        <div className='five-inner appear-in'>
          <div className='five-text'>
            <h2 className='five-header'>Tailored experince</h2>
          </div>
          <div className='five-img row'>
            <div className='col-md-4 exp-item'>
              <img src={expActive} alt="WOTA - Home" />
              <div>
                <h5>Active mode</h5>
                <p>
                  Best for urgent water needs. select a driver in the app, pick your desired product pay, then confirm delivery and the rate driver after dellivery.
                </p>
              </div>
            </div>
            <div className='col-md-4 exp-item'>
              <img src={expGeneral} alt="WOTA - Home" />
              <div>
                <h5>General mode</h5>
                <p>select your location and choose a driver/seller seller in the app, pick your desired product, pay, then confirm delivery and the rate driver after dellivery.</p>
              </div>
            </div>
            <div className='col-md-4 exp-item'>
              <img src={expProbe} alt="WOTA - Home" />
              <div>
                <h5>Probe mode</h5>
                <p>Best for bulk purchases. select a location in the app, create a probe and wait for offers from sellers! choose an offer, pay, then confirm delivery and rate driver after dellivery.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="sec-7" className='section-seven'>
        <div className='seven-inner appear-in'>
          <div className='seven-text'>
            <h2 className='seven-header'>Support and FAQs</h2>
          </div>
          <div className='seven-img row justify-around'>
            <div className='col-md-6 exp-item'>
              <div className="accordion" id="accordionExample">
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingOne">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                      Where can i find WOTA offices?
                    </button>
                  </h2>
                  <div id="collapseOne" className="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                      You can find WOTA offices in Lagos Nigeria for now, more offices on the way as we expand.
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingTwo">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                      Where does WOTA operate?
                    </button>
                  </h2>
                  <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                      WOTA offers a convinient way to purchase water products in more than 36 cities you can visit our website www.pairwota.com for more info.
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingThree">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                      WOTA API
                    </button>
                  </h2>
                  <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                      Thanks for your interest, unforturnately we do not offer any API's at the moment.
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingFour">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                      Delete my WOTA data
                    </button>
                  </h2>
                  <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                      WOTA processes some of your personal data when you install and sign in the World of Thirst app, you agree with our General Terms and Conditions and give your consent for collecting and processing your data.
                      As long as you have an active account your personal data would be stored. to get a copy of your personal data, Please contact our support.
                      To delete your data, please send a request for your account to be deleted via a message. After that, your personal data will be removed from the database. except such data is required for accounting, fraud prevention or dispute management.
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingFive">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                      I can't sign into my account
                    </button>
                  </h2>
                  <div id="collapseFive" className="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                      We are sorry for the inconvenience! Please contact support via email so we can troubleshoot and fix this issue.
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingSix">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
                      My account has been compromised
                    </button>
                  </h2>
                  <div id="collapseSix" className="accordion-collapse collapse" aria-labelledby="headingSix" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                      If you suspect that someone has gained access to and/or used your account without your consent, please contact your bank to block your card immediately to prevent further unauthorised use.
                      Do not hesitate to contact support for further assistance.
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingSeven">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSeven" aria-expanded="false" aria-controls="collapseSeven">
                      Signup to deliver water products
                    </button>
                  </h2>
                  <div id="collapseSeven" className="accordion-collapse collapse" aria-labelledby="headingSeven" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                      Earn extra money as a WOTA driver.
                      Make sure you are associated with an existing producer.
                      Download the WOTA Driver app on playstore or Appstore, signup and start delivering.
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingEight">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseEight" aria-expanded="false" aria-controls="collapseEight">
                      Signup to buy water
                    </button>
                  </h2>
                  <div id="collapseEight" className="accordion-collapse collapse" aria-labelledby="headingEight" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                      Download the Pair WOTA app on playstore or Appstore, signup and start buying.
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingNine">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseNine" aria-expanded="false" aria-controls="collapseNine">
                      Why is my account blocked?
                    </button>
                  </h2>
                  <div id="collapseNine" className="accordion-collapse collapse" aria-labelledby="headingNine" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                      Your account may be blocked if you have violated the World of thirst app rules. contact support via mail if your account has been blocked.
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingTen">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTen" aria-expanded="false" aria-controls="collapseTen">
                      Edit my account information
                    </button>
                  </h2>
                  <div id="collapseTen" className="accordion-collapse collapse" aria-labelledby="headingTen" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                      You can edit your profile information in the edit profile menu.
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-md-6 exp-item'>
              <div className="accordion" id="accordionExample">
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingEleven">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseEleven" aria-expanded="false" aria-controls="collapseEleven">
                      Request a copy of my WOTA data
                    </button>
                  </h2>
                  <div id="collapseEleven" className="accordion-collapse collapse" aria-labelledby="headingEleven" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                      To request a transfer of your personal data please contact the support team through the app.
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingTwelve">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwelve" aria-expanded="false" aria-controls="collapseTwelve">
                      How to view price breakdown
                    </button>
                  </h2>
                  <div id="collapseTwelve" className="accordion-collapse collapse" aria-labelledby="headingTwelve" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                      In your order history details, tap on the total price text.
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingThirteen">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse13" aria-expanded="false" aria-controls="collapse13">
                      Driver request for cash after you paid in app
                    </button>
                  </h2>
                  <div id="collapse13" className="accordion-collapse collapse" aria-labelledby="headingThirteen" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                      World of thirst app only supports non-cash payment for now, if after you paid in app and a driver request for cash. please contact our support via the app to report the situation.
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="heading14">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse14" aria-expanded="false" aria-controls="collapse14">
                      Price higher than expected
                    </button>
                  </h2>
                  <div id="collapse14" className="accordion-collapse collapse" aria-labelledby="heading14" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                      We are sorry about this issue: The final price may increase if the distance between your location and the seller/driver location is greater than 200 meters. exclusive of service charge fee.
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="heading15">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse15" aria-expanded="false" aria-controls="collapse15">
                      I want to report unknown charges
                    </button>
                  </h2>
                  <div id="collapse15" className="accordion-collapse collapse" aria-labelledby="heading15" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                      If you do not recognise the charge, please immediately contact your bank to block your card to prevent further un authorised use or contact support for help.
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="heading16">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse16" aria-expanded="false" aria-controls="collapse16">
                      I was charged twice for the same order
                    </button>
                  </h2>
                  <div id="collapse16" className="accordion-collapse collapse" aria-labelledby="heading16" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                      If you were charged twice for an order you placed please contact support for further investigation.
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="heading17">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse17" aria-expanded="false" aria-controls="collapse17">
                      Adding, changing or removing payment method
                    </button>
                  </h2>
                  <div id="collapse17" className="accordion-collapse collapse" aria-labelledby="heading18" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                      To add or remove payment card, Go to your wallet and add payment method or remove payment method.
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="heading19">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse18" aria-expanded="false" aria-controls="collapse18">
                      Map Shows incorrect data
                    </button>
                  </h2>
                  <div id="collapse18" className="accordion-collapse collapse" aria-labelledby="heading19" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                      If map is not loading correctly, make sure you have a stable internet connection if issues still persist. please contact support.
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="heading20">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse19" aria-expanded="false" aria-controls="collapse19">
                      How to get price estimate
                    </button>
                  </h2>
                  <div id="collapse19" className="accordion-collapse collapse" aria-labelledby="heading20" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                      You will see the price estimate for your order after you have selected the delivery address and desired product.
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="heading20">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse20" aria-expanded="false" aria-controls="collapse20">
                      How to order water
                    </button>
                  </h2>
                  <div id="collapse20" className="accordion-collapse collapse" aria-labelledby="heading20" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                      (Active mode) Tap on any car icon on the map and select desired products from sellers catalogue. then proceed to set delivery address.
                      (Normal mode) Select delivery location and desired product cateegory, we would look for all available sellers around your set delivery location. you can then proceed to select any seller of your choice.
                      (Probe mode) Create order probes in probe mode and wait for different drivers /sellers to make you an offer for your request.

                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )

  const handleViewName = () => {
    switch (nav) {
      case "home":
        return <Home />
        break;
      case "tandc":
        return <TandC />
        break;
      case "pandp":
        return <PandP />
        break;
      default:
        return <Home />
    }
  }


  return (
    loading ?
      <div className="loader">
        <Bubbles />
      </div> :

      <div className="App">

        {/* modal section  */}
        <Modal modal={modal} setModal={setModal} />
        <StoreModal modal={storeModal} setModal={setStoreModal} />
        <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="iwzcbxs-t7E" onClose={() => setOpen(false)} />

        {/* modal section ends */}

        <Header nav={nav} setNav={setNav} />
        {
          handleViewName()
        }

        <Footer setNav={setNav} />

      </div>
  );
}
