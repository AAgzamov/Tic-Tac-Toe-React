import React from "react";
import Clock from "./Clock";
import {ThemeContext} from "../context/ThemeContext";

export default function Header(props) {
    let {lightMode, toggleTheme} = React.useContext(ThemeContext)
    lightMode ? document.body.style.backgroundColor = "white" : document.body.style.backgroundColor = "#0f0f0f"
    if (lightMode) {
        document.styleSheets[0].cssRules[47] && document.styleSheets[0].deleteRule(47)
        document.styleSheets[0].insertRule("::selection {color: white; background-color: black;}", 47)
    } else {
        document.styleSheets[0].cssRules[47] && document.styleSheets[0].deleteRule(47)
        document.styleSheets[0].insertRule("::selection {color: black; background-color: white;}", 47)
    }
    if (props.isMounted) {
        return (
            <div className={lightMode ? "header" : "header__dark-mode"}>
                <div>Tic-Tac-Toe&nbsp;<span>by AAgzamov</span></div>
                <Clock isMounted={props.isMounted}/>
                {lightMode ? <img className="moon-theme-changer-button" src="/moon.svg" alt="darkMode" onClick={() => toggleTheme()}/> : <img className="sun-theme-changer-button" src="/sun.svg" alt="darkMode" onClick={() => toggleTheme()}/>}

            </div>
        )
    }
}