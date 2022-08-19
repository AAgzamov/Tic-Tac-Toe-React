import React from "react"
import {ThemeContext} from "../context/ThemeContext";

export default function PlaygroundHeader(props) {
    let {lightMode} = React.useContext(ThemeContext)
    if (props.status === 1) {
        return (
            <div className={lightMode ? "playground-header" : "playground-header__dark-mode"}>
                <div>{props.turn === "o" ? <span style={{color: "blue"}}>X</span> : <span style={{color: "red"}}>O</span>} wins &#129395;</div>
            </div>
        )
    } else if (props.status === 0) {
        return (
            <div className={lightMode ? "playground-header" : "playground-header__dark-mode"}>
                <div>D R A W! &#128540;</div>
            </div>
        )
    }

    else {
        return (
            <div className={lightMode ? "playground-header" : "playground-header__dark-mode"}>
                <div>Now it is turn of {props.turn === "o" ? <span style={{color: "red"}}>{props.turn.toUpperCase()}</span> : <span style={{color: "blue"}}>{props.turn.toUpperCase()}</span>}</div>
            </div>
        )
    }

}