import React, { useState } from 'react'
import Typing from 'react-typing-animation';
import { Link } from "react-scroll"
import nextlevel from "../nextlevel.png"
import previouslevel from "../previouslevel.png"
import megaman from "../megaman.png"
import traveler from "../traveler.png"
import preston from "../preston.png"
import adventurer from "../adventurer.png"
import choosecharacter from "../choosecharacter.png"

const AboutMe = () => {
    const initialState = (<div><br></br><br></br><br></br></div>)
    const [characterDescripton, setCharacterDescription] = useState(initialState);
    function resetAnimation(){
        console.log("resetting animation")
        setCharacterDescription(initialState)
    }
    const chooseCharacter = (character) => {
        if(character === "developer"){
            console.log("Im a developer")
            setCharacterDescription(<Typing>Hello, my name is Preston Segura. I'm a Tech Support Software Engineer living in San Diego looking to pursue a career in Web Development.</Typing>)
        }
        else if(character === "traveler"){
            console.log("Im a traveler")
            setCharacterDescription("Hi! I'm a traveler, I love to explore all over the world and experience different cultuers.  I feel the best way to learn is to get out and go experience all this planet has to offer!")
        }
        else if(character === "gamer"){
            console.log("Im a gamer")
            setCharacterDescription("What's up? Grab a controller or your mouse and keyboard and let's play! There's no easier way to blow off some steam than having some 13 year old scream at you!")
        }
        else if(character === "wanderer"){
            setCharacterDescription("Let's go on a hike somewhere cool! We can grab our backpacks, some food and water and get on our way to the top of this mountain. Race you to the top!")
        }
    }
        return (
        <div className="text-center about-section" id="about">
            <div ><img className="img-fluid text-center choose-character" src={choosecharacter} alt="player1"></img></div>
            <div className="players row">
                <figure className="col">
                    <img className="img-fluid player zoom" onClick={() => {chooseCharacter("developer")}} src={preston} alt="player1"></img>
                    <figcaption class="figure-caption nav-link">Developer</figcaption>
                </figure>
                <figure className="col">
                    <img className="img-fluid player zoom" onClick={() => {chooseCharacter("traveler")}} src={traveler} alt="player2"></img>
                    <figcaption class="figure-caption nav-link">Traveler</figcaption>
                </figure>
                <figure className="col">
                    <img className="img-fluid player zoom" onClick={() => {chooseCharacter("gamer")}} src={megaman} alt="player3"></img>
                    <figcaption class="figure-caption nav-link">Gamer</figcaption>
                </figure>
                <figure className="col">
                    <img className="img-fluid player zoom" onClick={() => {chooseCharacter("wanderer")}} src={adventurer} alt="player4"></img>
                    <figcaption class="figure-caption nav-link">Wanderer</figcaption>
                </figure>
            </div>
            <div id="character-description">
                <p id="character-text" className="nav-link character-description">{characterDescripton}</p>
            </div>

            <div className="next-and-back-buttons">

                <Link activeClass="active" to="nav" spy={true} smooth={true} offset={0} duration={500}>
                    <button className="btn"><img src={previouslevel} className="img-fluid next-level" alt="previous level"></img></button>
                </Link>
                <Link activeClass="active" to="about" spy={true} smooth={true} offset={0} duration={500}>
                    <button className="btn"><img src={nextlevel} className="img-fluid next-level" alt="next level"></img></button>
                </Link>
            </div>
        </div>
    )
}


export default AboutMe