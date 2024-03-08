import { Route, Routes } from "react-router-dom";
import "./Routing.css";
import PickCoin from "../../Game/PickCoin/PickCoin";
import PlayArea from "../../Game/PlayArea/PlayArea";

interface RoutingProps{
    passUserChoice: Function;
    userChoice: string;
    setPoints: Function;
}

function Routing(props: RoutingProps): JSX.Element {
    return (
        <div className="Routing">
			<Routes>
                <Route path="/" element={<PickCoin passUserChoice={props.passUserChoice}/>} />
                <Route path="/play-area" element={<PlayArea userChoice={props.userChoice} setPoints={props.setPoints}/>} />
            </Routes>
        </div>
    );
}

export default Routing;
