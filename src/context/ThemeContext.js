import React from "react"

const ThemeContext = React.createContext(true)
function ThemeProvider(props) {
    let [lightMode, toggleMode] = React.useState(true)
    function toggleTheme() {
        toggleMode(!lightMode)
    }
    return (
        <div>
            <ThemeContext.Provider value={{lightMode, toggleTheme}}>
                {props.children}
            </ThemeContext.Provider>
        </div>
    )
}

export {ThemeContext, ThemeProvider}