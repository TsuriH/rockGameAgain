import "./PickCoin.css";
import pentagonShape from "../../../images/bg-pentagon.svg"
import paperImage from "../../../images/icon-paper.svg"
import scissorsImage from "../../../images/icon-scissors.svg"
import rockImage from "../../../images/icon-rock.svg"
import lizardImage from "../../../images/icon-lizard.svg"
import spockImage from "../../../images/icon-spock.svg"
import { NavLink } from "react-router-dom";

interface CoinProps {
    passUserChoice: Function;
}

function PickCoin(props: CoinProps): JSX.Element {

    return (
        <div className="PickCoin">

            <img src={pentagonShape} alt="" className="pentagon"/>
            <NavLink to={"/play-area"}>

                <div className="coin-template paper-container" onClick={() => props.passUserChoice("paper")}>
                    <img src={paperImage} alt="" className="coin-image" />
                </div>
            </NavLink>

            <NavLink to={"/play-area"}>

                <div className="coin-template scissors-container" onClick={() => props.passUserChoice("scissors")}>
                    <img src={scissorsImage} alt="" className="coin-image" />
                </div>
            </NavLink>

            <NavLink to={"/play-area"}>

                <div className="coin-template lizard-container" onClick={() => props.passUserChoice("lizard")}>
                    <img src={lizardImage} alt="" className="coin-image" />
                </div>
            </NavLink>

            <NavLink to={"/play-area"}>

                <div className="coin-template spock-container" onClick={() => props.passUserChoice("spock")}>
                    <img src={spockImage} alt="" className="coin-image" />
                </div>
            </NavLink>

            <NavLink to={"/play-area"}>

                <div className="coin-template rock-container" onClick={() => props.passUserChoice("rock")}>
                    <img src={rockImage} alt="" className="coin-image" />
                </div>
            </NavLink>


        </div>
    );
}

export default PickCoin;
