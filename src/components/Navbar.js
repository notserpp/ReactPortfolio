import logo from "../logo.png"
import { Link } from "react-scroll"
import startgame from '../startgame.png'
import React from 'react'
import NavButtons from "./NavButtons"



const Navbar = () => {
    return (
        <div id="nav">
            <div className="main-section">
                <nav className="autohide navbar navbar-expand-lg navbar-dark bg-transparent">
                    <div className="container-fluid">
                        <img src={logo} className="logo" alt=""></img>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#main_nav">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <NavButtons />
                    </div>
                </nav>
                <Link activeClass="active" to="about" spy={true} smooth={true} offset={0} duration={700}>
                    <div className="text-center main-section"><button className="btn"><img src={startgame} className="img-fluid start-game" alt="start game"></img></button></div>
                </Link>
            </div>
        </div>
    )
}
export default Navbar
