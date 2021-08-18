import React from 'react'
import { Link } from "react-scroll"
import nextlevel from "../nextlevel.png"
import previouslevel from "../previouslevel.png"


const AboutMe = () => {
    return (
        <div className="text-center about-section" id="about">
            <Link activeClass="active" to="nav" spy={true} smooth={true} offset={0} duration={500}>
            <button  className="btn"><img src={previouslevel} className="img-fluid next-level" alt="start game"></img></button>
            </Link>
            <Link activeClass="active" to="about" spy={true} smooth={true} offset={0} duration={500}>
            <button  className="btn"><img src={nextlevel} className="img-fluid next-level" alt="start game"></img></button>
            </Link>
        </div>
    )
}

export default AboutMe