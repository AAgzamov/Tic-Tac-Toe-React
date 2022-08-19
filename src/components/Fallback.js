import React from "react";

export default () => {
    const styles = {
        display: "flex",
        width: "100vw",
        height: "100vh",
        justifyContent: "center",
        alignItems: "center",
        fontSize: "5vw",
        backgroundColor: "#d9d9d9", // gray
        fontColor: "black",
        fontFamily: "Ubuntu, sans-serif"
    }
    return (
        <div style={styles}>
            Loading...
        </div>
    )
}