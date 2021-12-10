import React from 'react'
import { ChoseYourPath } from './ChooseYourCharacter'
import { NextAndBackButtons2 } from './NextAndBackButtons'
import stripe from '../stripe.png'
import quote from '../quote.png'
import uno from '../uno.png'
import smoothies from '../smoothies.png'


const Portfolio = () => {
    return (
        <div className="portflio-section text-center" id="portfolio">
            <ChoseYourPath />
            <div>
                <a href="https://beachcitysmoothies.herokuapp.com/index.html" target="_blank" rel="noreferrer"><img className="img-fluid portfolio-img zoom portfolio" src={smoothies} alt="smoothies"></img></a>
                <a href="https://random-quote-generator-preston.herokuapp.com/" target="_blank" rel="noreferrer"><img className="img-fluid portfolio-img zoom portfolio" src={quote} alt="quote"></img></a>
            </div>
            <div>
                <a href="http://csc667-uno.herokuapp.com/" target="_blank" rel="noreferrer"><img className="img-fluid portfolio-img zoom portfolio" src={uno} alt="uno"></img></a>
                <a href="https://php-stripe-api.herokuapp.com/" target="_blank" rel="noreferrer"><img className="img-fluid portfolio-img zoom portfolio" src={stripe} alt="stripe"></img></a>

            </div>
            <NextAndBackButtons2 />
        </div>
    )
}



export default Portfolio