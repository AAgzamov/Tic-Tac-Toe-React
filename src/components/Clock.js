import React, {useEffect, useState} from "react";

export default (props) => {
    let [time, updateTime] = useState(new Date())
    useEffect(() => {
        props.isMounted ? setInterval(() => updateTime(new Date()), 1000) : null
    }, [])
    return (
        <div className="clock">{time.toLocaleTimeString()}</div>
    )
}