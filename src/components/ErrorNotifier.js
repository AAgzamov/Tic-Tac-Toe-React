import React from "react";
const spanStyle = {
    display: "inline-block",
    backgroundColor: "white",
    color: "red"
}
export default () => (
    <div className="error-notifier">
        <div><span style={spanStyle}>Error:</span>&nbsp;You can select only empty fields!</div>
    </div>
)