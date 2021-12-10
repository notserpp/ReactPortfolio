import React, { useState} from 'react'
import megaman from "../megaman.png"
import travel from "../traveler.png"
import preston from "../preston.png"
import adventurer from "../adventurer.png"
import {NextAndBackButtons} from './NextAndBackButtons'
import ChooseYourCharacter from './ChooseYourCharacter'


const AboutMe = () => {
    const [characterDescripton, setCharacterDescription] = useState("Click on each of the characters to get a description.");
    const developer = "Hello, my name is Preston Segura. I'm a Tech Support Software Engineer living in San Diego looking to pursue a career in Web Development."
    const traveler = "Hi! I'm a traveler, I love to explore all over the world and experience different cultuers.  I feel the best way to learn is to get out and go experience all this planet has to offer!"
    const gamer = "What's up? Grab a controller or your mouse and keyboard and let's play! There's no easier way to blow off some steam than grouping up with friends and defeating enemies!"
    const wanderer = "Let's go on a hike somewhere cool! We can grab our backpacks, some food and water and get on our way to the top of this mountain. Race you to the top!"
        return (
        <div className="text-center about-section" id="about">
            <ChooseYourCharacter />
            <div className="players row">
            <figure className="col">
                    <img className="img-fluid player zoom" onClick={() => {setCharacterDescription(developer)}} src={preston} alt="player1"></img>
                    <figcaption className="figure-caption nav-link">Developer</figcaption>
                </figure>
                <figure className="col">
                    <img className="img-fluid player zoom" onClick={() => {setCharacterDescription(traveler)}} src={travel} alt="player2"></img>
                    <figcaption className="figure-caption nav-link">Traveler</figcaption>
                </figure>
                <figure className="col">
                    <img className="img-fluid player zoom" onClick={() => {setCharacterDescription(gamer)}} src={megaman} alt="player3"></img>
                    <figcaption className="figure-caption nav-link">Gamer</figcaption>
                </figure>
                <figure className="col">
                    <img className="img-fluid player zoom" onClick={() => {setCharacterDescription(wanderer)}} src={adventurer} alt="player4"></img>
                    <figcaption className="figure-caption nav-link">Wanderer</figcaption>
                </figure>
            </div>
            <div id="character-description">
                <div id="character-text" className="nav-link character-description text-center">{characterDescripton}</div>
            </div>
            <NextAndBackButtons />
        </div>
    )
}


export default AboutMe