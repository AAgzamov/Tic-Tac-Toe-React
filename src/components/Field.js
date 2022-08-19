import React from "react"
import {ThemeContext} from "../context/ThemeContext";

export default (props) => {
    let {lightMode} = React.useContext(ThemeContext)
    if (props.status === 1) {
        return (
            <div className={lightMode ? "field" : "field__dark-mode"} id={props.id} onClick={props.clickHandler} style={{backgroundColor: "#54ba50"}}>
                {props.value}
            </div>
        )
    }
    return (
        <div className={lightMode ? "field" : "field__dark-mode"} id={props.id} onClick={props.clickHandler}>
            {props.value}
        </div>
)}