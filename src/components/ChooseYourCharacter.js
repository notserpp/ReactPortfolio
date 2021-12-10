import choosecharacter from "../choosecharacter.png"
import choosepath from "../choosepath.png"

const ChooseYourCharacter = () => {
    return (
        <div ><img className="img-fluid text-center choose-character" src={choosecharacter} alt="player1"></img></div>
    )
}

export const ChoseYourPath = () => {
    return (
        <div ><img className="img-fluid text-center choose-character" src={choosepath} alt="player1"></img></div>
    )
}

export default ChooseYourCharacter