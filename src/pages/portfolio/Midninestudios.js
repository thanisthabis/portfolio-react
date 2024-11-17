import React from 'react';
import { useEffect,useState,useContext } from 'react';
import './Midninestudios.css';
import Typewriter from 'typewriter-effect';
import transition from '../../../src/Transition.js';

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { EffectCards, EffectCoverflow, Pagination, Autoplay, Navigation } from "swiper";

import Instagram from '../../assets/midnineLink.svg';
import review1 from './img/1.jpg';
import review2 from './img/2.JPG';
import review3 from './img/3.JPG';
import review4 from './img/4.JPG';
import review5 from './img/5.JPG';
import review7 from './img/7.JPG';
import art1 from './img/art1.JPG';
import art2 from './img/art2.JPG';
import art3 from './img/art3.JPG';
import art4 from './img/art4.JPG';
import art5 from './img/art5.JPG';
import art6 from './img/art6.JPG';
import art7 from './img/art7.JPG';
import art8 from './img/art8.JPG';
import art9 from './img/art9.JPG';
import art10 from './img/art10.JPG';
import art11 from './img/art11.JPG';
import art12 from './img/art12.JPG';
import asap1 from './img/asap1.JPG';
import asap3 from './img/asap3.PNG';
import dino3 from './img/dino3.JPG';
import dino4 from './img/dino4.JPG';
import dino5 from './img/dino5.JPG';
import dino6 from './img/dino6.JPG';
import dino7 from './img/dino7.JPG';
import dino8 from './img/dino8.JPG';
import dino11 from './img/dino11.JPG';
import draw1 from './img/draw1.JPG';
import mood1 from './img/mood1.JPG';
import mood2 from './img/mood2.JPG';
import mood4 from './img/mood4.PNG';
import mood7 from './img/mood7.PNG';
import green2 from './img/green2.jpg';
import green3 from './img/green3.JPG';
import green8 from './img/green8.JPG';
import green10 from './img/green10.JPG';
import green11 from './img/green11.JPG';
import green12 from './img/green12.JPG';
import guess2 from './img/guess2.JPG';
import guess3 from './img/guess3.JPG';
import guess4 from './img/guess4.JPG';
import guess6 from './img/guess6.JPG';
import guess21 from './img/guess21.JPG';
import guess22 from './img/guess22.JPG';
import guess27 from './img/guess27.JPG';
import guess29 from './img/guess29.JPG';
import guess31 from './img/guess31.JPG';
import guess33 from './img/guess33.JPG';
import guess38 from './img/guess38.JPG';
import guess41 from './img/guess41.JPG';
import shirt2 from './img/shirt2.JPG';
import shirt3 from './img/shirt3.JPG';
import shirt5 from './img/shirt5.JPG';
import shirt6 from './img/shirt6.JPG';
import shirt7 from './img/shirt7.JPG';
import shirt8 from './img/shirt8.JPG';
import shirt9 from './img/shirt9.JPG';
import shirt11 from './img/shirt11.JPG';
import shirt12 from './img/shirt12.JPG';
import new3 from './img/new3.JPG';
import new4 from './img/new4.JPG';
import new5 from './img/new5.jpg';


const Midninestudios = () => {
    const [offsetY, setOffsetY] = useState(0);
    const handleScroll  = () => setOffsetY(window);

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div className="midninestudios">
            <div className="background">
                <section id="background__up"></section>
                <section id="background__down"></section>
                <section id="background__left"></section>
                <section id="background__right"></section>
            </div>

            <main className="midninestudios__main">
                <div class="midninestudios__container">
                    <div class="wrapper">
                        <div class="slide">
                            <div class="intro__section" id="intro">
                                <div className="intro__container container">
                                    <div className="intro__content">
                                    <div className="intro__title">
                                            <h1>midninestudios.</h1>
                                            <h1>midninestudios.</h1>
                                            <h1>midninestudios.</h1>
                                    </div>
                                        <div className="intro__description">
                                            <span>In the midst of the pandemic in 2020, 
                                            Midninestudios was founded with the idea that creativity knows no bounds, 
                                            especially during the midnight hours. Our brand name and slogan "Need no nap" 
                                            embody this spirit. Based in Bangkok, Thailand, we offer a range of trendy t-shirts, sweatshirts, 
                                            and crop tops designed to inspire and empower teenagers. Our goal is to spark imagination and encourage 
                                            the use of creativity in everyday life.</span>
                                        </div>
                                        
                                        <div clsssName="intro__button">
                                            <div className="intro__button__description__1">Click</div>
                                            <a href="https://www.instagram.com/midninestudios/" target="_blank" rel="noopener noreferrer">
                                                <img src={Instagram} className="intro__button__img"/>
                                            </a>
                                            <div className="intro__button__description__2">to explore more!</div>
                                        </div>
                                    </div>
                                    <div className="graphics__content">
                                        <div className="graphics__images">

                                            <div className="imgPreview"></div>

                                            <div className="imgRow">

                                                <div className="imgContainer">
                                                    <div className="wrap" style={{transform: `translateY(-${offsetY * 0.6}px)` }}>
                                                        <img className="graphics__image" src={draw1} alt=" "/>
                                                    </div>
                                                </div>

                                                <div className="noImg"></div>

                                                <div className="noImg"></div>

                                            </div>

                                            <div className="imgRow">

                                                <div className="noImg"></div>

                                                <div className="noImg"></div>

                                                <div className="imgContainer">
                                                    <div className="wrap" style={{transform: `translateY(-${offsetY * 0.5}px)` }}>
                                                        <img className="graphics__image" src={mood1} alt=" "/>
                                                    </div>
                                                </div>

                                                <div className="noImg"></div>

                                                <div className="imgContainer">
                                                    <div className="wrap" style={{transform: `translateY(-${offsetY * 0.2}px)` }}>
                                                        <img className="graphics__image" src={mood2} alt=" "/>
                                                    </div>
                                                </div>

                                                <div className="noImg"></div>

                                                <div className="imgContainer">
                                                    <div className="wrap" style={{transform: `translateY(-${offsetY * 0.5}px)` }}>
                                                        <img className="graphics__image" src={mood4} alt=" "/>
                                                    </div>
                                                </div>

                                                <div className="noImg"></div>

                                                <div className="imgContainer">
                                                    <div className="wrap" style={{transform: `translateY(-${offsetY * 0.6}px)` }}>
                                                        <img className="graphics__image" src={mood7} alt=" "/>
                                                    </div>
                                                </div>

                                                <div className="noImg"></div>
                                                <div className="noImg"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div class="slide">
                            <div class="popup__section" id="popup">
                                <div className="popup__container container">
                                    <div className="popup__content" >
                                        <div className="popup__images">
                                            <img className="popup__image" src={asap1}/>
                                            <img className="popup__image" src={asap3}/>
                                        </div>
                                        <div className="popup__description">*display at ASAP store in Bangkok, Thailand for 3 months</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="slide">
                            <div class="review__section" id="review">
                                <div className="review__container container">
                                    <div className="review__content">
                                        <div className="review__carousal">
                                            <div className="review__name">*Creativity</div>
                                                <img className="review__image" src={art1} alt=" "/>
                                                <img className="review__image" src={art2} alt=" "/>
                                                <img className="review__image" src={art3} alt=" "/>
                                                <img className="review__image" src={art4} alt=" "/>
                                                <img className="review__image" src={art5} alt=" "/>

                                                <img className="review__image" src={review1} alt=" "/>
                                                <img className="review__image" src={review2} alt=" "/>
                                                <img className="review__image" src={review3} alt=" "/>
                                                <img className="review__image" src={review4} alt=" "/>
                                                <img className="review__image" src={review5} alt=" "/>
                                                <img className="review__image" src={review7} alt=" "/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="swiper-slide">
                            <div class="pinkartsy__section" id="pinkartsy">
                                <div className="pinkartsy__container container">
                                    <div className="pinkartsy__content">
                                    <div className="pinkartsy__description">needs</div>
                                    <Swiper
                                        spaceBetween={30}
                                        centeredSlides={true}
                                        autoplay={{
                                        delay: 1000,
                                        disableOnInteraction: false,
                                        }}
                                        navigation={false}
                                        modules={[Autoplay, Pagination, Navigation]}
                                        className="pinkartsy__swiper"
                                    >
                                        <SwiperSlide className="pinkartsy__images">
                                            <img className="pinkartsy__image" src={art6} alt=" "/>
                                        </SwiperSlide>
                                        <SwiperSlide className="pinkartsy__images">
                                            <img className="pinkartsy__image" src={art7} alt=" "/>
                                        </SwiperSlide>
                                        <SwiperSlide className="pinkartsy__images">
                                            <img className="pinkartsy__image" src={art8} alt=" "/>
                                        </SwiperSlide>
                                        <SwiperSlide className="pinkartsy__images">
                                            <img className="pinkartsy__image" src={art9} alt=" "/>
                                        </SwiperSlide>
                                        <SwiperSlide className="pinkartsy__images">
                                            <img className="pinkartsy__image" src={art10} alt=" "/>
                                        </SwiperSlide>
                                        <SwiperSlide className="pinkartsy__images">
                                            <img className="pinkartsy__image" src={art11} alt=" "/>
                                        </SwiperSlide>
                                        <SwiperSlide className="pinkartsy__images">
                                            <img className="pinkartsy__image" src={art12} alt=" "/>
                                        </SwiperSlide>
                                    </Swiper>
                                    <div className="pinkartsy__description_1">no</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="swiper-slide">
                            <div class="dino__section" id="dino">
                                <div className="dino__container container">
                                    <div className="dino__content">
                                    <div className="dino__description">N      AP...</div>
                                    <Swiper
                                        effect={"coverflow"}
                                        grabCursor={false}
                                        centeredSlides={true}
                                        slidesPerView={"auto"}
                                        coverflowEffect={{
                                        rotate: 50,
                                        stretch: 0,
                                        depth: 100,
                                        modifier: 1,
                                        slideShadows: true,
                                        }}
                                        pagination={false}
                                        modules={[EffectCoverflow, Pagination]}
                                        className="dino__swiper"
                                    >
                                        <SwiperSlide className="dino__images">
                                            <img className="dino__image" src={dino11} alt=" "/>
                                        </SwiperSlide>
                                        <SwiperSlide className="dino__images">
                                            <img className="dino__image" src={dino4} alt=" "/>
                                        </SwiperSlide>
                                        <SwiperSlide className="dino__images">
                                            <img className="dino__image" src={dino5} alt=" "/>
                                        </SwiperSlide>
                                        <SwiperSlide className="dino__images">
                                            <img className="dino__image" src={dino6} alt=" "/>
                                        </SwiperSlide>
                                        <SwiperSlide className="dino__images">
                                            <img className="dino__image" src={dino7} alt=" "/>
                                        </SwiperSlide>
                                        <SwiperSlide className="dino__images">
                                            <img className="dino__image" src={dino8} alt=" "/>
                                        </SwiperSlide>
                                        <SwiperSlide className="dino__images">
                                            <img className="dino__image" src={dino3} alt=" "/>
                                        </SwiperSlide>
                                    </Swiper>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="swiper-slide">
                            <div class="guess__section" id="guess">
                                <div className="guess__container container">
                                    <div className="guess__content">
                                        <div className="guess__swiper">
                                            <div className="guess__swiper__track">
                                                <div className="guess__images">
                                                    <img className="guess__image" src={guess2} alt=" "/>
                                                </div>
                                                <div className="guess__images">
                                                    <img className="guess__image" src={guess3} alt=" "/>
                                                </div>
                                                <div className="guess__images">
                                                    <img className="guess__image" src={guess4} alt=" "/>
                                                </div>
                                                <div className="guess__images">
                                                    <img className="guess__image" src={guess6} alt=" "/>
                                                </div>
                                                <div className="guess__images">
                                                    <img className="guess__image" src={guess21} alt=" "/>
                                                </div>
                                                <div className="guess__images">
                                                    <img className="guess__image" src={guess22} alt=" "/>
                                                </div>
                                                <div className="guess__images">
                                                    <img className="guess__image" src={guess27} alt=" "/>
                                                </div>
                                                <div className="guess__images">
                                                    <img className="guess__image" src={guess29} alt=" "/>
                                                </div>
                                                <div className="guess__images">
                                                    <img className="guess__image" src={guess31} alt=" "/>
                                                </div>
                                                <div className="guess__images">
                                                    <img className="guess__image" src={guess33} alt=" "/>
                                                </div>
                                                <div className="guess__images">
                                                    <img className="guess__image" src={guess38} alt=" "/>
                                                </div>
                                                <div className="guess__images">
                                                    <img className="guess__image" src={guess41} alt=" "/>
                                                </div>    
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="swiper-slide">
                            <div class="green__section" id="green">
                                <div className="green__container container">
                                    <div className="green__content">
                                    <div className="green__description">.・゜+.. </div>
                                    <Swiper
                                        effect={"cards"}
                                        grabCursor={true}
                                        modules={[EffectCards]}
                                        className="green__cards"
                                    >
                                        <SwiperSlide className="green__images">
                                            <img className="green__image" src={green2} alt=" "/>
                                        </SwiperSlide>
                                        <SwiperSlide className="green__images">
                                            <img className="green__image" src={green3} alt=" "/>
                                        </SwiperSlide>
                                        <SwiperSlide className="green__images">
                                            <img className="green__image" src={green8} alt=" "/>
                                        </SwiperSlide>
                                        <SwiperSlide className="green__images">
                                            <img className="green__image" src={green10} alt=" "/>
                                        </SwiperSlide>
                                        <SwiperSlide className="green__images">
                                            <img className="green__image" src={green11} alt=" "/>
                                        </SwiperSlide>
                                        <SwiperSlide className="green__images">
                                            <img className="green__image" src={green12} alt=" "/>
                                        </SwiperSlide>
                                    </Swiper>
                                    <div className="green__circle"></div>
                                    <div className="green__description_1">˚  ⋆ 𐐪𐑂</div>
                                    <div className="green__description_2" style={{transform: `translateY(-${offsetY * 0.09}px)` }}>drag to move '>'</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="swiper-slide">
                            <div class="shirt__section" id="shirt">
                                <div className="shirt__container container">
                                    <div className="shirt__content">
                                        <div className="shirt__swiper">
                                                <div className="shirt__swiper__track">
                                                    <div className="shirt__images">
                                                        <img className="shirt__image" src={shirt2} alt=" "/>
                                                    </div>
                                                    <div className="shirt__images">
                                                        <img className="shirt__image" src={shirt3} alt=" "/>
                                                    </div>
                                                    <div className="shirt__images">
                                                        <img className="shirt__image" src={shirt5} alt=" "/>
                                                    </div>
                                                    <div className="shirt__images">
                                                        <img className="shirt__image" src={shirt6} alt=" "/>
                                                    </div>
                                                    <div className="shirt__images">
                                                        <img className="shirt__image" src={shirt7} alt=" "/>
                                                    </div>
                                                    <div className="shirt__images">
                                                        <img className="shirt__image" src={shirt8} alt=" "/>
                                                    </div>
                                                    <div className="shirt__images">
                                                        <img className="shirt__image" src={shirt9} alt=" "/>
                                                    </div>
                                                    <div className="shirt__images">
                                                        <img className="shirt__image" src={shirt11} alt=" "/>
                                                    </div>
                                                    <div className="shirt__images">
                                                        <img className="shirt__image" src={shirt12} alt=" "/>
                                                    </div>
                                                </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="swiper-slide">
                            <div class="soon__section" id="shirt">
                                <div className="soon__container">
                                    <div className="soon__content">
                                        <div className="soon__images">
                                            <img className="soon__image" src={new3} alt=" "/>
                                            <img className="soon__image" src={new4} alt=" "/>
                                            <div className="soon__description">
                                                <Typewriter
                                                    options={{
                                                    strings: ['Coming soon.⋆゜'],
                                                    cursorClassName: "soon__description__cursor",
                                                    wrapperClassName: "soon__description",
                                                    autoStart: true,
                                                    loop: true,
                                                }}
                                                />
                                        </div>
                                            <img className="soon__image" src={new5} alt=" "/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="swiper-slide">
                            <div class="ending__section" id="ending">
                                <div className="ending__container container">
                                    <div className="ending__content">
                                        <div className="ending__description">#midninestudiosworldwide</div>
                                        <div className="ending__description">#mnstudiomood</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </main>
        </div>
    )
}

export default transition(Midninestudios);