import React from 'react'
import startgame from '../startgame.png'


const AboutMe = () => {
    return (
        <div className="text-center"><button className="btn" onClick={scrollToAbout}><img src={startgame} className="img-fluid start-game" alt="start game"></img></button></div>
    )
}

function scrollToAbout(){
    console.log("scrolling...")
}

export default AboutMe