import React from "react"

export default class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props)
        this.state = {hasError: false}
    }
    styles = {
        display: "flex",
        width: "100vw",
        height: "100vh",
        justifyContent: "center",
        alignItems: "center",
        fontSize: "5vw",
        backgroundColor: "#d9d9d9", // gray
        fontColor: "black",
        fontFamily: "Ubuntu, sans-serif",
        padding: "0 10vw"
    }
    static getDerivedStateFromError(error) {
        return {hasError: true}
    }
    componentDidCatch(error, errorInfo) {
        console.error(`${error}: ${errorInfo}`)
    }
    render () {
        if (this.state.hasError) {
            return (
            <div style={this.styles}>
                Something went wrong!
                <br />
                Check your internet connection and reload the page.
            </div>
            )
        }
        return this.props.children
    }
}