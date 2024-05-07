import "./PlayArea.css";
import paper from "../../../images/icon-paper.svg"
import scissors from "../../../images/icon-scissors.svg"
import rock from "../../../images/icon-rock.svg"
import lizard from "../../../images/icon-lizard.svg"
import spock from "../../../images/icon-spock.svg"

import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

interface PlayAreaProps {
    userChoice: string;
    setPoints: Function;
}

function PlayArea(props: PlayAreaProps): JSX.Element {

    const [userChosenCoinDetails, setUserChosenCoinDetails] = useState({
        image: "",
        borderColor: "",
        shadow: "",
    })

    const [cpuChoiceDetails, setCpuChoiceDetails] = useState({
        image: "",
        borderColor: "",
        shadow: "",
    })

    const [whichUserWon, setWhichUserWon] = useState<string>()
    const [isHidden, setIsHidden] = useState<boolean>(true)
    const [addShadowCirclesToWinner, setAddShadowCirclesToWinner] = useState<any>()
    const [count, setCount] = useState<number>(3)
    let randomCpuChoice = ""

    const generateCpuChoice = () => {
        const coinsOptions = ["paper", "rock", "scissors", "lizard", "spock"]

        randomCpuChoice = coinsOptions[Math.floor(Math.random() * coinsOptions.length)]
        const test = 3
        switch (randomCpuChoice) {
            case "paper":
                setCpuChoiceDetails(prevChosenCoin => ({
                    image: paper,
                    borderColor: "hsl(230, 89%, 62%)",
                    shadow: "0px 5px 2px hsl(230, 100%, 83%) inset, 0px 5px 2px 1px hsl(230, 61%, 45%)"
                }))
                break;
            case "scissors":
                setCpuChoiceDetails(prevChosenCoin => ({
                    image: scissors,
                    borderColor: "hsl(39, 89%, 49%)",
                    shadow: "0px 5px 2px hsl(39, 81%, 65%) inset, 0px 5px 2px 1px hsl(39, 88%, 41%)"
                }))

                break;
            case "rock":
                setCpuChoiceDetails(prevChosenCoin => ({
                    image: rock,
                    borderColor: "hsl(349, 71%, 52%)",
                    shadow: "0px 5px 2px hsl(349, 80%, 63%) inset, 0px 5px 2px 1px hsl(349, 65%, 36%)"
                }))

                break;
            case "lizard":
                setCpuChoiceDetails(prevChosenCoin => ({
                    image: lizard,
                    borderColor: "hsl(261, 73%, 60%)",
                    shadow: "0px 5px 2px  hsl(261, 80%, 76%) inset, 0px 5px 2px 1px  hsl(261, 50%, 46%)"
                }))

                break;
            case "spock":
                setCpuChoiceDetails(prevChosenCoin => ({
                    image: spock,
                    borderColor: "hsl(189, 59%, 53%)",
                    shadow: "0px 5px 2px hsl(189, 72%, 66%) inset, 0px 5px 2px 1px hsl(189, 53%, 40%)"
                }))

                break;

        }


    }

    const setWinner = () => {

        if (props.userChoice === "paper" && randomCpuChoice === "rock" || props.userChoice === "rock" && randomCpuChoice === "lizard" || props.userChoice === "lizard" && randomCpuChoice === "spock" || props.userChoice === "spock" && randomCpuChoice === "scissors" || props.userChoice === "scissors" && randomCpuChoice === "paper" || props.userChoice === "scissors" && randomCpuChoice === "lizard" || props.userChoice === "paper" && randomCpuChoice === "spock" || props.userChoice === "rock" && randomCpuChoice === "scissors" || props.userChoice === "lizard" && randomCpuChoice === "paper" || props.userChoice === "spock" && randomCpuChoice === "rock") {

            setWhichUserWon("you won")
            props.setPoints("won")
        }

        else if (props.userChoice === randomCpuChoice) {

            setWhichUserWon("it's a draw")
        }

        else {

            setWhichUserWon("you lost")
            props.setPoints("lost")
        }
    }

    useEffect(() => {
        setTimeout(() => {
            setIsHidden(!isHidden)

        }, 3000);
    }, [])

    useEffect(() => {
        generateCpuChoice()
    }, [])





    useEffect(() => {
        switch (props.userChoice) {
            case "paper":
                setUserChosenCoinDetails(prevChosenCoin => ({
                    image: paper,
                    borderColor: "hsl(230, 89%, 62%)",
                    shadow: "0px 5px 2px hsl(230, 100%, 83%) inset, 0px 5px 2px 1px hsl(230, 61%, 45%)"
                }))
                break;
            case "scissors":
                setUserChosenCoinDetails(prevChosenCoin => ({
                    image: scissors,
                    borderColor: "hsl(39, 89%, 49%)",
                    shadow: "0px 5px 2px hsl(39, 81%, 65%) inset, 0px 5px 2px 1px hsl(39, 88%, 41%)"
                }))

                break;
            case "rock":
                setUserChosenCoinDetails(prevChosenCoin => ({
                    image: rock,
                    borderColor: "hsl(349, 71%, 52%)",
                    shadow: "0px 5px 2px hsl(349, 80%, 63%) inset, 0px 5px 2px 1px hsl(349, 65%, 36%)"
                }))

                break;
            case "lizard":
                setUserChosenCoinDetails(prevChosenCoin => ({
                    image: lizard,
                    borderColor: "hsl(261, 73%, 60%)",
                    shadow: "0px 5px 2px  hsl(261, 80%, 76%) inset, 0px 5px 2px 1px  hsl(261, 50%, 46%)"
                }))

                break;
            case "spock":
                setUserChosenCoinDetails(prevChosenCoin => ({
                    image: spock,
                    borderColor: "hsl(189, 59%, 53%)",
                    shadow: "0px 5px 2px hsl(189, 72%, 66%) inset, 0px 5px 2px 1px hsl(189, 53%, 40%)"
                }))

                break;
        }

    }, [])

    useEffect(() => {
        setWinner()

    }, [])

    useEffect(() => {
        // setTimeout(() => {

        let result = null


        if (whichUserWon) {
            if (whichUserWon === "you won") {
                let result = "you won"
            }
            else if (whichUserWon === "you lost") {
                let result = "you lost"
            }
        }

        console.log(`whichUserWon: ${whichUserWon}`)
        console.log(`result: ${result}`)
        console.log(addShadowCirclesToWinner)
        console.log("test")


    }, [whichUserWon]);

    useEffect(() => {
        const timer = setInterval(() => {
            setCount((prevCount) => {
                if (prevCount === 0) {
                    clearInterval(timer);
                    return prevCount;
                }
                return prevCount - 1;
            });
        }, 1000);

        return () => clearInterval(timer);
    }, []);




    // ***UI***
    return (
        <div className="PlayArea">

            <div className="coins-container">

                <div className="single-coin-container">
                    <p className="user-choice">you picked </p>
                    <div className="coin-template" style={{ border: `27px solid ${userChosenCoinDetails.borderColor}`, boxShadow: userChosenCoinDetails.shadow }}>
                        <img src={userChosenCoinDetails.image} alt="" className="coin-image" />


                        {addShadowCirclesToWinner === "you won" ? <div className="winner-shadow">
                            <div className="winner-second-shadow">
                                <div className="winner-third-shadow">
                                </div>
                            </div>
                        </div> : null}


                    </div>
                </div>

                <div className="result-container" style={isHidden ? { display: "none" } : { display: "flex" }}>
                    <p className="result-text">{whichUserWon}</p>
                    <NavLink to={"/"}>
                        <button className="rematch-btn" >play again</button>
                    </NavLink>
                </div>

                <div className="single-coin-container" style={isHidden ? { visibility: "hidden" } : { visibility: "visible" }}>

                    <p className="cpu-choice">the house picked</p>
                    <div className="coin-template" style={{ border: `27px solid ${cpuChoiceDetails.borderColor}`, boxShadow: cpuChoiceDetails.shadow }} >

                        <img src={cpuChoiceDetails.image} alt="" className="coin-image" />
                        <div className="coin-shadow" style={isHidden ? { visibility: "visible" } : { visibility: "hidden" }}> </div>

                        <span className="count-down" style={!isHidden ? { visibility: "hidden" } : { visibility: "visible" }}>{count}</span>

                        {addShadowCirclesToWinner === "you lost" ? <div className="winner-shadow">
                            <div className="winner-second-shadow">
                                <div className="winner-third-shadow">
                                </div>
                            </div>

                        </div> : null}

                    </div>

                </div>


            </div>

        </div>

    );
}

export default PlayArea;
