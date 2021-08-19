import logo from "../logo.png"
import $ from 'jquery'
import { Link } from "react-scroll"
import startgame from '../startgame.png'
import React, { useState, useEffect, useRef } from 'react'
import NET from 'vanta/dist/vanta.net.min'


const Navbar = () => {
    const [vantaEffect, setVantaEffect] = useState(0)
    const vantaRef = useRef(null)
    const changeEffect = () => {
        vantaEffect.setOptions({
            color: "#008037" 
        })
        
    }
    useEffect(() => {
        if (!vantaEffect) {
            setVantaEffect(NET({
                el: vantaRef.current,
                mouseControls: true,
                touchControls: true,
                gyroControls: false,
                showDots: false,
                minHeight: 1000,
                minWidth: 200.00,
                scale: 1.00,
                scaleMobile: 1.00,
                color: "#ff001b",
                backgroundColor: "#212529",
                forceAnimate: true

            }));
        }
    }
        , [vantaEffect])
    return (
        <div id="nav">
            <div className="bg-image" ref={vantaRef}></div>
            <div className="main-section">
                <nav className="autohide navbar navbar-expand-lg navbar-dark bg-transparent">
                    <div className="container-fluid">
                        <img src={logo} className="logo" alt=""></img>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#main_nav">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="main_nav">
                            <ul className="navbar-nav ms-auto">
                                <li className="nav-item"><a className="nav-link nav-link-fade-up" href="/#">About Me</a></li>
                                <li className="nav-item"><a className="nav-link nav-link-fade-up" href="/#">Portfolio</a></li>
                                <li className="nav-item"><a className="nav-link nav-link-fade-up" href="/#">Experience</a></li>
                                <li className="nav-item"><a className="nav-link nav-link-fade-up" href="/#">Contact</a></li>
                            </ul>
                        </div>
                    </div>
                </nav>
                <Link activeClass="active" to="about" spy={true} smooth={true} offset={0} duration={500}>
                    <div className="text-center main-section"><button onClick={changeEffect} className="btn"><img src={startgame} className="img-fluid start-game" alt="start game"></img></button></div>
                </Link>
            </div>
        </div>
    )
}

$(document).ready(function () {
    const el_autohide = document.querySelector('.autohide');
    if (el_autohide) {
        var last_scroll_top = 0;
        window.addEventListener('scroll', function () {
            let scroll_top = window.scrollY;
            if (scroll_top < last_scroll_top) {
                el_autohide.classList.remove('scrolled-down');
                el_autohide.classList.add('scrolled-up');
            }
            else {
                el_autohide.classList.remove('scrolled-up');
                el_autohide.classList.add('scrolled-down');
            }
            last_scroll_top = scroll_top;
        });
        // window.addEventListener
    }
})

export default Navbar
