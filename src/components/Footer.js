import React from "react";
import {ThemeContext} from "../context/ThemeContext";

export default function Footer() {
    let {lightMode} = React.useContext(ThemeContext)
    return (
        <div className={lightMode ? "footer" : "footer__dark-mode"}>
            <div><a id={lightMode ? "color-fill" : "color-fill__dark-mode"} href="https://github.com/AAgzamov/Tic-Tac-Toe-React" data="GitHub">GitHub</a></div>
            <div><a id={lightMode ? "color-fill" : "color-fill__dark-mode"} href="https://www.youtube.com/channel/UCObN423Uc3ZlefU5WxhTaUA"
                    data="YouTube">YouTube</a></div>
            <div className="footer-email">
                aagzamov.contact@gmail.com
            </div>
        </div>
    )
}
