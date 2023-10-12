import {
  MouseParallaxChild,
  MouseParallaxContainer
} from "react-parallax-mouse";
import "./App.css";
import './waves.css';
import React, { useState, useEffect } from 'react';

import ModalVideo from 'react-modal-video-rv18'
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
import cardIcon1 from './assets/img/logos/card-icon1.svg';
import cardIcon2 from './assets/img/logos/card-icon2.svg';

import appStore from './assets/img/app-store.svg';
import googlePlay from './assets/img/google-play.svg';
import mockPhone from './assets/img/mock-rocket.png';

import brandOne from './assets/img/logos/MTN-Logo.png';
import brandTwo from './assets/img/logos/Glo.png';
import brandThree from './assets/img/logos/9mobile.png';
import brandFour from './assets/img/logos/airtel.png';
import brandFive from './assets/img/logos/snk.png';
import brandSix from './assets/img/brand-one.svg';

import mockup from './assets/img/mock-up.svg';
import chat from './assets/img/chat.svg';
import { ReactComponent as Bubbles } from "./assets/img/rocket.svg";

import expActive from './assets/img/exp-active.svg';
import expGeneral from './assets/img/exp-general.svg';
import expProbe from './assets/img/exp-probe.svg';
import { setTimeout } from "timers";
import { SliderData } from './component/slider/data';
import ImageSlider from './component/slider/Silder'



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
        <div className='hero-inner col'>

          <div className='hero-text'>
            <div>
              <h1 className='hero-header fade-in-in'>
                <span className="head-1">Welcome to Swift Recharge</span><br />
                <span className="head-2">Your all-in-one platform for seamless bill payment.</span>
              </h1>
            </div>
          </div>
          <div className='hero-text'>
            <Scroll to="sec-1" spy={true} smooth={true} className="hero-button">Start Now</Scroll>

          </div>
          <div className='hero-img appear-in row gap-5'>
            <div className="col-md-4 hero-img-1 hero-img-card">
              <div className="img-1" />
              <div>
                <p><b> Airtime Recharge</b></p>
                <p>Instantly top up airtime for any mobile network in Nigeria. Stay connected anytime, anywhere.</p>
              </div>
            </div>

            <div className="col-md-4 hero-img-2 hero-img-card">
              <div className="img-2" />
              <div>
                <p><b>Bill Payment Made Easy</b></p>
                <p>Pay your bills hassle-free with Swift Recharge. Enjoy access to over 8000+ billers for convenient and secure transactions.</p>
              </div>
            </div>

            <div className="col-md-4 hero-img-3 hero-img-card">
              <div className="img-3" />
              <div>
                <p><b>Airtime Vault</b></p>
                <p>Never run out of airtime again. Swift Recharge's Airtime Vault ensures you always have offline and online access to airtime, providing peace of mind.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="sec-1" className='section-three'>
        <div className='three-inner'>
          <div className='three-text fade-in-in'>
            <h6 className='three-header'>Powered by</h6>
          </div>
          <div className='three-img appear-in'>
            <div>
              <div className='row logos-col items-center'>
                <div className='col-4 col-md-2'>
                  <img src={brandOne} alt="SWIFT RECHARGE - Home" className="logos" />
                </div>
                <div className='col-4 col-md-2'>
                  <img src={brandTwo} alt="SWIFT RECHARGE - Home" className="logos" />
                </div>
                <div className='col-4 col-md-2'>
                  <img src={brandThree} alt="SWIFT RECHARGE - Home" className="logos logos-3" />
                </div>
                <div className='col-4 col-md-2'>
                  <img src={brandFour} alt="SWIFT RECHARGE - Home" className="logos logos-4" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="sec-2" className='section-one'>
        <div className='one-inner row'>
          <div className='col-md-5 one-text'>
            <div className="position-relative text-container">
              <h6 className='one-header-top fade-in-in'>Airtime</h6>
              <h2 className='one-header fade-in-in'>Airtime Recharge</h2>
              <p className="one-header-inner">
                <img src={cardIcon1} alt="Card Icon" />
                Instant Airtime Recharge
              </p>
              <p className='one-content fade-in-in'>Top up your airtime instantly for all major mobile
                networks in Nigeria. Stay connected effortlessly with just a few clicks.</p>
            </div>
          </div>

          <div className='col-md-6 one-img appear-in'>
            <div className="card-img img-card-1">
              <div className="img-1" />
              <div>
                <p><b>Customizable Recharge Amounts</b></p>
                <p>Choose recharge amounts based on your needs. Swift Recharge caters
                  to both casual users and those with specific usage requirements.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="sec-3" className='section-one'>
        <div className='one-inner row'>
          <div className='col-md-5 one-img appear-in'>
            <div className="card-img img-card-2">
              <div className="img-2" />
              <div>
                <p><b>Recharge Card 2.0</b></p>
                <p>Swift Recharge introduces a new system for non-instant airtime top-up,
                  available both offline and online. Enjoy flexibility and convenience.</p>
              </div>
            </div>
          </div>
          <div className='col-md-6 one-text'>
            <div className="position-relative text-container">
              <h6 className='one-header-top fade-in-in'>Airtime</h6>
              <h2 className='one-header fade-in-in'>Airtime Vault</h2>
              <p className="one-header-inner">
                <img src={cardIcon2} alt="Card Icon" />
                New Airtime Product
              </p>
              <p className='one-content fade-in-in'>Swift Recharge's Airtime Vault feature ensures you're always airtime sufficient.
                Access your reserve/vault of airtime both offline and online, providing uninterrupted communication.</p>
            </div>
          </div>
        </div>
      </div>

      <div id="sec-4" className='section-one'>
        <div className='one-inner row'>
          <div className='col-md-5 one-text'>
            <div className="position-relative text-container">
              <h6 className='one-header-top fade-in-in'>Payment</h6>
              <h2 className='one-header fade-in-in'>Pay Bills with Ease</h2>
              <p className="one-header-inner">
                <img src={cardIcon1} alt="Card Icon" />
                Embrace the Latest Airtime Technology
              </p>
              <p className='one-content fade-in-in'>Swift Recharge offers a simple and secure bill payment solution.
                Enjoy the convenience of paying over 8000+ billers from various sectors.</p>
            </div>
          </div>

          <div className='col-md-6 one-img appear-in'>
            <div className="card-img img-card-1">
              <div className="img-3" />
              <div>
                <p><b>Awoof Link</b></p>
                <p>Unlock special rewards with Swift Recharge's Awoof Link.
                  Click the link to redeem already paid products from our extensive network of 8000+ billers.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="sec-5" className='section-one'>
        <div className='one-inner row'>
          <div className='col-md-5 one-img appear-in'>
            <div className="card-img img-card-2">
              <div className="img-4" />
              <div>
                <p><b>Secure and Reliable</b></p>
                <p>Trust in Swift Recharge's secure and reliable platform.
                  We prioritize the security of your transactions and ensure your data is protected.</p>
              </div>
            </div>
          </div>
          <div className='col-md-6 one-text'>
            <div className="position-relative text-container">
              <h6 className='one-header-top fade-in-in'>Payment</h6>
              <h2 className='one-header fade-in-in'>Timely Bill Reminders</h2>
              <p className="one-header-inner">
                <img src={cardIcon2} alt="Card Icon" />
                Embrace the Latest Financial Technology
              </p>
              <p className='one-content fade-in-in'>Never miss a bill payment deadline again.
                Swift Recharge provides timely reminders to help you stay on top of your bills.</p>
            </div>
          </div>
        </div>
      </div>

      <div id="sec-6" className='section-six'>
        <div className='six-inner row'>
          <div className='col-md-7 two-text'>
            <div>
              <h3 className='two-header fade-in-in'>Sort your Airtime and payments with us!
                Get the App today.</h3>
              <button className='app-button appear-in two-button'>
                <a rel="noopener noreferrer" className="text" href="https://play.google.com/store/apps/details?id=com.techtemple.swiftrecharge" target="_blank" style={{color: "rgb(250, 250, 250)"}}>App store</a>
              </button>
              <button className='app-button appear-in two-button'>
                <a rel="noopener noreferrer" className="text" href="https://play.google.com/store/apps/details?id=com.techtemple.swiftrecharge" target="_blank" style={{color: "rgb(250, 250, 250)"}}>Play store</a>
              </button>
            </div>
          </div>
          <div className='col-md-4 sec-notif ' />
        </div>
      </div>

      <div id="sec-7" className='section-slider'>
        <ImageSlider slides={SliderData} />
      </div>

      <div id="sec-8" className='section-seven'>
        <div className='seven-inner appear-in'>
          <div className='seven-text'>
            <h2 className='seven-header'>Support and FAQs</h2>
          </div>
          <div className='seven-img row justify-around'>

            <div className='col-md-6 exp-item'>
              <div className="accordion" id="accordionExample">
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingEleven">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseEleven" aria-expanded="false" aria-controls="collapseEleven">
                      Delete my SWIFT RECHARGE data
                    </button>
                  </h2>
                  <div id="collapseEleven" className="accordion-collapse collapse" aria-labelledby="headingEleven" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                      SWIFT RECHARGE processes some of your personal data when you install and sign in the Swift Rechage app, you agree with our General Terms and Conditions and give your consent for collecting and processing your data. As long as you have an active account your personal data would be stored. to get a copy of your personal data, Please contact our support. To delete your data, please send a request for your account to be deleted via a message. After that, your personal data will be removed from the database. except such data is required for accounting, fraud prevention or dispute management.
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingTwelve">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwelve" aria-expanded="false" aria-controls="collapseTwelve">
                      I can't sign into my account
                    </button>
                  </h2>
                  <div id="collapseTwelve" className="accordion-collapse collapse" aria-labelledby="headingTwelve" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                      We are sorry for the inconvenience! Please contact support via email so we can troubleshoot and fix this issue.
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingThirteen">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse13" aria-expanded="false" aria-controls="collapse13">
                      My account has been compromised
                    </button>
                  </h2>
                  <div id="collapse13" className="accordion-collapse collapse" aria-labelledby="headingThirteen" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                      If you suspect that someone has gained access to and/or used your account without your consent, please contact your bank to block your card immediately to prevent further unauthorised use. Do not hesitate to contact support for further assistance.
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="heading14">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse14" aria-expanded="false" aria-controls="collapse14">
                      Signup to deliver water products
                    </button>
                  </h2>
                  <div id="collapse14" className="accordion-collapse collapse" aria-labelledby="heading14" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                      Earn extra money as a Swift Recharge driver. Make sure you are associated with an existing producer. Download the Swift Recharge Driver app on playstore or Appstore, signup and start delivering.
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="heading15">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse15" aria-expanded="false" aria-controls="collapse15">
                      Signup to Swift recharge
                    </button>
                  </h2>
                  <div id="collapse15" className="accordion-collapse collapse" aria-labelledby="heading15" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                      Download the Swift recharge app on playstore or Appstore, signup and start buying.
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="heading16">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse16" aria-expanded="false" aria-controls="collapse16">
                      Why is my account blocked?
                    </button>
                  </h2>
                  <div id="collapse16" className="accordion-collapse collapse" aria-labelledby="heading16" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                      Your account may be blocked if you have violated the Swift Recharge app rules. contact support via mail if your account has been blocked.
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="heading17">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse17" aria-expanded="false" aria-controls="collapse17">
                      Edit my account information
                    </button>
                  </h2>
                  <div id="collapse17" className="accordion-collapse collapse" aria-labelledby="heading18" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                      You can edit your profile information in the edit profile menu.
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="heading19">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse18" aria-expanded="false" aria-controls="collapse18">
                      Request a copy of my SWIFT RECHARGE data
                    </button>
                  </h2>
                  <div id="collapse18" className="accordion-collapse collapse" aria-labelledby="heading19" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                      To request a transfer of your personal data please contact the support team through the app.
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="heading20">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse19" aria-expanded="false" aria-controls="collapse19">
                      Delete my account
                    </button>
                  </h2>
                  <div id="collapse19" className="accordion-collapse collapse" aria-labelledby="heading20" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                      To delete your account kindly make your request via email to support@swiftrecharge.ng or any social media channel to commence account deletion process , once your account is deleted you won't be able to restore any information connected to it.
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="heading20">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse20" aria-expanded="false" aria-controls="collapse20">
                      Where can I find SWIFT RECHARGE offices?
                    </button>
                  </h2>
                  <div id="collapse20" className="accordion-collapse collapse" aria-labelledby="heading20" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                      You can find SWIFT RECHARGE offices in Lagos Nigeria for now, more offices on the way as we expand.
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="heading20">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse20" aria-expanded="false" aria-controls="collapse20">
                      Where does SWIFT RECHAGRE operate?
                    </button>
                  </h2>
                  <div id="collapse20" className="accordion-collapse collapse" aria-labelledby="heading20" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                      Swift recharge offers a convinient way to pay bills for over 8000+ billers you can visit our website www.swiftrecharge.ng for more info.
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="heading20">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse20" aria-expanded="false" aria-controls="collapse20">
                      SWIFT RECHARGE API
                    </button>
                  </h2>
                  <div id="collapse20" className="accordion-collapse collapse" aria-labelledby="heading20" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                      Thanks for your interest, unforturnately we do not offer any API's at the moment.
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

        {/* modal section */}
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
