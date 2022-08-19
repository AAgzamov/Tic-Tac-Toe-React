import React, {useState, Suspense, startTransition} from "react"
import Fallback from "./components/Fallback";
import ErrorBoundary from "./components/ErrorBoundary";
import {ThemeProvider} from "./context/ThemeContext";


const Playground = React.lazy(() => import("./components/Playground"))
const Header = React.lazy(() => import("./components/Header"))
const PlaygroundHeader = React.lazy(() => import("./components/PlaygroundHeader"))
const Footer = React.lazy(() => import("./components/Footer"))
const ErrorNotifier = React.lazy(() => import("./components/ErrorNotifier"))

export default function App() {

    let [turn, updateTurn] = useState("x")
    let [error, updateError] = useState(false)
    // "status" state to check if someone won or draw.
    let [status, updateStatus] = useState(-1)
    let [coordinates, updateCoordinates] = useState([])
    let isMounted = true


    function turnUpdater(initial) {
        if (initial) {
            updateTurn("x")
        } else {
            turn === "x" ? updateTurn("o") : updateTurn("x")
            startTransition(() => {
                updateError(false)
            })
        }
    }

    function checkStatus(fields) {
        // Check for X.
        // Vertically.
        if (fields[0].content === "X" && fields[1].content === "X" && fields[2].content === "X") {
            updateCoordinates([fields[0].id, fields[1].id, fields[2].id])
            updateStatus(1)
            return
        } else if (fields[3].content === "X" && fields[4].content === "X" && fields[5].content === "X") {
            updateCoordinates([fields[3].id, fields[4].id, fields[5].id])
            updateStatus(1)
            return
        } else if (fields[6].content === "X" && fields[7].content === "X" && fields[8].content === "X") {
            updateCoordinates([fields[6].id, fields[7].id, fields[8].id])
            updateStatus(1)
            return
        }
        // Horizontally.
        else if (fields[0].content === "X" && fields[3].content === "X" && fields[6].content === "X") {
            updateCoordinates([fields[0].id, fields[3].id, fields[6].id])
            updateStatus(1)
            return
        } else if (fields[1].content === "X" && fields[4].content === "X" && fields[7].content === "X") {
            updateCoordinates([fields[1].id, fields[4].id, fields[7].id])
            updateStatus(1)
            return
        } else if (fields[2].content === "X" && fields[5].content === "X" && fields[8].content === "X") {
            updateCoordinates([fields[2].id, fields[5].id, fields[8].id])
            updateStatus(1)
            return
        }
        // Diagonally.
        else if (fields[0].content === "X" && fields[4].content === "X" && fields[8].content === "X") {
            console.log("game")
            updateCoordinates([fields[0].id, fields[4].id, fields[8].id])
            updateStatus(1)
            return
        } else if (fields[2].content === "X" && fields[4].content === "X" && fields[6].content === "X") {
            updateCoordinates([fields[2].id, fields[4].id, fields[6].id])
            updateStatus(1)
            return
        }


        // Check of O.
        // Vertically.
        if (fields[0].content === "O" && fields[1].content === "O" && fields[2].content === "O") {
            updateCoordinates([fields[0].id, fields[1].id, fields[2].id])
            updateStatus(1)
            return
        } else if (fields[3].content === "O" && fields[4].content === "O" && fields[5].content === "O") {
            updateCoordinates([fields[3].id, fields[4].id, fields[5].id])
            updateStatus(1)
            return
        } else if (fields[6].content === "O" && fields[7].content === "O" && fields[8].content === "O") {
            updateCoordinates([fields[6].id, fields[7].id, fields[8].id])
            updateStatus(1)
            return
        }
        // Horizontally.
        else if (fields[0].content === "O" && fields[3].content === "O" && fields[6].content === "O") {
            updateCoordinates([fields[0].id, fields[3].id, fields[6].id])
            updateStatus(1)
            return
        } else if (fields[1].content === "O" && fields[4].content === "O" && fields[7].content === "O") {
            updateCoordinates([fields[1].id, fields[4].id, fields[7].id])
            updateStatus(1)
            return
        } else if (fields[2].content === "O" && fields[5].content === "O" && fields[8].content === "O") {
            updateCoordinates([fields[2].id, fields[5].id, fields[8].id])
            updateStatus(1)
            return
        }
        // Diagonally.
        else if (fields[0].content === "O" && fields[4].content === "O" && fields[8].content === "O") {
            updateCoordinates([fields[0].id, fields[4].id, fields[8].id])
            updateStatus(1)
            return
        } else if (fields[2].content === "O" && fields[4].content === "O" && fields[6].content === "O") {
            updateCoordinates([fields[2].id, fields[4].id, fields[6].id])
            updateStatus(1)
            return
        }

        // Check for draw.
        if (fields.every(field => field.filled === true)) {
            updateStatus(0)
        }

    }

    function errorNotification() {
        startTransition(() => {
            updateError(true)
        })
    }

    return (
        <div>
            <ErrorBoundary>
                <Suspense fallback={<Fallback/>}>
                    <ThemeProvider>
                        <Header isMounted={isMounted}/>
                        <PlaygroundHeader turn={turn} status={status}/>
                        <Playground turnUpdater={turnUpdater} turn={turn} checkStatus={checkStatus}
                                    coordinates={coordinates} updateCoordinates={updateCoordinates} status={status}
                                    updateStatus={updateStatus} errorNotification={errorNotification} />
                        <Footer/>
                        {error ? <ErrorNotifier/> : undefined}
                    </ThemeProvider>
                </Suspense>
            </ErrorBoundary>

        </div>
    )
}