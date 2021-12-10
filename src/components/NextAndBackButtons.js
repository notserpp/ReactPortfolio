
import { Link } from "react-scroll"
import nextlevel from "../nextlevel.png"
import previouslevel from "../previouslevel.png"
import home from "../home.png"

export const NextAndBackButtons = () => {
    return (
        <div className="next-and-back-buttons">
            <Link activeClass="active" to="nav" spy={true} smooth={true} offset={0} duration={700}>
                <button className="btn home"><img src={home} className="img-fluid next-level" alt="home"></img></button>
            </Link>
            <Link activeClass="active" to="portfolio" spy={true} smooth={true} offset={0} duration={700}>
                <button className="btn"><img src={nextlevel} className="img-fluid next-level" alt="next level"></img></button>
            </Link>
        </div>
    )
}

export const NextAndBackButtons2 = () => {
    return (
        <div className="next-and-back-buttons-2">
            <Link activeClass="active" to="nav" spy={true} smooth={true} offset={0} duration={700}>
                <button className="btn home"><img src={home} className="img-fluid next-level" alt="home"></img></button>
            </Link>
            <Link activeClass="active" to="about" spy={true} smooth={true} offset={0} duration={700}>
                <button className="btn"><img src={previouslevel} className="img-fluid next-level" alt="previous level"></img></button>
            </Link>
            <Link activeClass="active" to="portfolio" spy={true} smooth={true} offset={0} duration={700}>
                <button className="btn"><img src={nextlevel} className="img-fluid next-level" alt="next level"></img></button>
            </Link>

        </div>
    )
}

export default NextAndBackButtons2

