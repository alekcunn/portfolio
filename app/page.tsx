'use client'

import Logo from './imgs/logo.svg'
import Me from '/app/imgs/me.png'
import Image from "next/image"

import me from "./imgs/me.webp"

import { useEffect, useState } from "react";



export default function Home() {

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [showToggle, setShowToggle] = useState(false);


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
        handleResize(); // Initial check on load

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []
    )

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <>
                <main className="main">
                    <nav className="navbar mx-2 navbar-dark bg-dark fixed-top">
                        <a className="navbar-brand" href="#">
                            <Logo />
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

                                    {/* <div className="dropdown dropdown-end absolute top-4">
                                        <div tabIndex={0} role="button" className="btn btn-ghost rounded-btn">Dropdown</div>
                                        <ul
                                        tabIndex={0}
                                        className="menu dropdown-content bg-base-100 rounded-box z-[1] mt-4 w-52 p-2 shadow">
                                        <li><a>Item 1</a></li>
                                        <li><a>Item 2</a></li>
                                        </ul>
                                    </div> */}
                                    
                                </ul>
                                {/* <form className="form-inline my-2 my-lg-0">
                                    <input className="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search" />
                                    <button className="btn btn-secondary my-2 my-sm-0" type="submit">Search</button>
                                </form> */}
                            </div>
                            )}
                    </nav>

                        <div className='photo-of-me' >


                            <img src="./imgs/me.png" alt="Your Image" className="parallax-image" />
                        </div>
   
                    <div className="text-center m-0" id="about-me">
                        <h1>Hi, Welcome to my home page!</h1>
                        <p className="lead">My name is Alex Cunningham, but I like to be called Alek, and aspire to be a computer scientist.</p><br />
                        <p>I have always loved computers because they made me wonder how they work. I put together a computer myself when I was 6. <br />
                            I installed the modem and had it on AOL in one day. My parents were astonished.</p><br />
                        <p>To learn more about me visit my bio!</p>
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
