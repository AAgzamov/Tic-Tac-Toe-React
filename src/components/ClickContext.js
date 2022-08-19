import React from "react"

export default React.createContext((e) => {
    e.target.textContent = "X"
})