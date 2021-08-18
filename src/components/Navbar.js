import React from 'react'
import logo from "../logo.png"
import $ from "jquery"


const Navbar = () => {
    return (
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
    // if


})

export default Navbar
