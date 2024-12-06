'use client'

import Logo from './imgs/logo.svg'
import Image from 'next/image'
import { gsap } from 'gsap'

import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'; 

import me from "./imgs/thenewme.webp"

import { useEffect, useState } from "react";

import styles from 'page.module.scss'



export default function Home() {

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [showToggle, setShowToggle] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false)

    gsap.registerPlugin(ScrollTrigger);


    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 600) {
                setIsMenuOpen(true);
                setShowToggle(false);
            } else {
                setIsMenuOpen(false);
                setShowToggle(true);
            }
        };



        window.addEventListener('resize', handleResize);
        handleResize(); 

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []
    )

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };


    useEffect(() => {
        const handleScroll = () => {
          // Check if user has scrolled more than 50 pixels
          setIsScrolled(window.scrollY > 50);
        };
    
        // Add scroll event listener
        window.addEventListener('scroll', handleScroll);
    
        // Cleanup event listener
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);

    useEffect(() => {


        let tl = gsap.to('.parallax-container', { 
          scrollTrigger: {
            trigger: '.parallax-container',
            scrub: 2,
            pin: true,
            start: 'top top', 
            end: '+=200', 
          },
          
          ease: 'none',
        });
      }, []);

    return (
        <>
                <nav className={`
                        fixed 
                        left-0 
                        right-0 
                        z-50 
                        transition-all 
                        duration-300 
                        ease-in-out 
                        bg-gray-800 
                        text-white
                        styles.main
                        ${isScrolled 
                        ? 'top-[10px] mx-4 rounded-full shadow-lg stick:top-[10px]' 
                        : 'top-0 h-16 rounded-none'}
                    `}>
                        <a className="navbar-brand" href="#">
                            {/* <Logo /> */}
                            
                        </a>

                        {showToggle && (<button className="navbar-toggler" type="button" data-toggle="collapse" onClick={toggleMenu} data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>)}

                        {isMenuOpen &&
                            //only display if window is more than 600px otherwise toggle menu
                            (<div className="navbar-collapse" id="navbarsExampleDefault">
                                <ul className="navbar-nav mr-auto">
                                    <li className="nav-item active">
                                        <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">Portfolio</a>
                                    </li>
                                    <details className="nav-item dropdown dropdown-end">
                                        <summary tabIndex={0} className="btn nav-link dropdown-toggle">About me</summary>
                                        <ul tabIndex={0} className="absolute top-full menu dropdown-content bg-green-800 rounded-box z-[1] w-52 p-2 shadow" id="about-me-dropdown" aria-labelledby="dropdown01">
                                            <li><a className="dropdown-item" href="#">FAQ</a> </li>
                                            <li><a className="dropdown-item" href="#">My Bio</a></li>
                                            <li><a className="dropdown-item" href="#">My dreams</a></li>
                                        </ul>
                                    </details>
                                </ul>
                            </div>
                            )}
                    </nav>
                <main className="mt-16 flex">

                    <div className="text-center m-0" id="about-me">
                        <h1>Hi, Welcome to my home page!</h1>
                        <p className="lead">My name is Alex Cunningham, but I like to be called Alek, and aspire to be a computer scientist.</p><br />
                        <p>I have always loved computers because they made me wonder how they work. I put together a computer myself when I was 6. <br />
                            I installed the modem and had it on AOL in one day. My parents were astonished.</p><br />
                        <p>To learn more about me visit my bio!</p>
                    
                    

                    </div>

                        <div className='parallax-container' >
                            <Image 
                                src={me} 
                                alt="Your Image" 
                                className="parallax-image"
                                fill={true}

                            />
                        </div>
   

                    <div className="m-0" id="exp">
                        <h3>My language experience </h3>
                        <div id="skills">
                            HTML:
                            <div className="html">
                                5 years
                            </div>
                            JavaScript:
                            <div className="javascript">
                                2 years
                            </div>
                            CSS:
                            <div className="css">
                                4 years
                            </div>
                            Python:
                            <div className="python">
                                1 year
                            </div>
                        </div>

                    </div>

                    <div id="footer">©copyright 2019 Alex Cunningham<br /><a href="#">Site map</a></div>

                </main>
            </>
    );
}
