import React, { useState, Fragment } from 'react';
import { SliderData } from './data';
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';
import avatar from '../../assets/img/avatar.svg';





const ImageSlider = ({ slides }) => {
    const [current, setCurrent] = useState(0);
    const length = slides.length;

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1);
    };

    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1);
    };

    if (!Array.isArray(slides) || slides.length <= 0) {
        return null;
    }

    console.log(current);

    return (
        <section className='slider'>
            <FaArrowAltCircleLeft className='left-arrow' onClick={prevSlide} />
            <FaArrowAltCircleRight className='right-arrow' onClick={nextSlide} />
            {SliderData.map((slide, index) => {
                return (
                    <Fragment key={index}>
                        <div
                            className={index - 1 === current - 1 ? 'slide slide-sides card-sides' : 'slide'}
                            key={index - 1}
                            style={{ left: "32px" }}
                        >
                             <h2 className='slide-header'>{SliderData[index - 1]?.header || ""}</h2>
                            <p className='slide-text'>{SliderData[index - 1]?.text || ""}</p>
                            <div className="slide-img">
                                <img src={avatar} alt="SWIFT RECHARGE - Home" className="logos logos-3" />
                                <p className='slide-text'>{SliderData[index - 1]?.name || ""}</p>
                            </div>
                        </div>
                        <div
                            className={index === current ? 'slide active card-center' : 'slide'}
                            key={index}
                        >
                            <h2 className='slide-header'>{slide?.header || ""}</h2>
                            <p className='slide-text'>{slide?.text || ""}</p>
                            <div className="slide-img">
                                <img src={avatar} alt="SWIFT RECHARGE - Home" className="logos logos-3" />
                                <p className='slide-text'>{slide?.name || ""}</p>
                            </div>
                        </div>
                        <div
                            className={index + 1 === current + 1 ? 'slide slide-sides card-sides' : 'slide'}
                            key={index + 1}
                            style={{ right: "32px" }}
                        >
                             <h2 className='slide-header'>{SliderData[index + 1]?.header || ""}</h2>
                            <p className='slide-text'>{SliderData[index + 1]?.text || ""}</p>
                            <div className="slide-img">
                                <img src={avatar} alt="SWIFT RECHARGE - Home" className="logos logos-3" />
                                <p className='slide-text'>{SliderData[index + 1]?.name || ""}</p>
                            </div>
                        </div>
                    </Fragment>
                );
            })}
        </section>
    );
};

export default ImageSlider;