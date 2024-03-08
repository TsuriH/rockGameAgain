import "./Layout.css";
import logo from "../../images/logo-bonus.svg"
import Routing from "./Routing/Routing";
import { useState } from "react";
import rules from "../../images/image-rules-bonus.svg"
import closeIcon from "../../images/icon-close.svg"

function Layout(): JSX.Element {

    const [userChoice, setUserChoice] = useState<string>("")
    const [points, setPoints] = useState<number>(0)
    const [rulesAreOpen, setRulesAreOpen] = useState<boolean>(false)

    const wonOrLost = (result: string) => {
        setTimeout(() => {
            console.log(result)
            if (result === "won") {
                setPoints(prevPoints => prevPoints + 1)
            }
            else if (result === "lost") {
                setPoints(prevPoints => prevPoints - 1)
            }
        }, 3000)
    }

    const passUserChoice = (choice: string) => {
        setUserChoice(choice)
    }

    //problem because of the React.StrictMode I get twice result


    return (
        <div className="Layout">
            <header>
                <img src={logo} alt="" />
                <div className="score-display">
                    <p className="score">score</p>
                    <p className="points">{points}</p>
                </div>
            </header>

            <main>
                <Routing passUserChoice={passUserChoice} userChoice={userChoice} setPoints={wonOrLost} />
            </main>
            <button className="rules-btn" onClick={() => setRulesAreOpen(!rulesAreOpen)}>rules</button>
            {rulesAreOpen &&

                <div className="rules-wrapper">
                    <div className="rules-container">

                        <div className="upper-part">
                            <p>rules</p>
                            <img src={closeIcon} alt="" className="close-btn" onClick={() => setRulesAreOpen(!rulesAreOpen)} />
                        </div>
                        <img src={rules} alt="" className="rules" />
                        
                    </div>

                </div>

            }
        </div>
    );
}

export default Layout;
