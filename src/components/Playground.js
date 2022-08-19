import React, {useState} from "react"
import Field from "./Field"
import {ThemeContext} from "../context/ThemeContext";

const Playground = (props) => {
    let {lightMode} = React.useContext(ThemeContext)
    let [fields, updateFields] = useState([
        {
            content: "",
            filled: false,
            id: "0"
        },
        {
            content: "",
            filled: false,
            id: "1"
        },
        {
            content: "",
            filled: false,
            id: "2"
        },
        {
            content: "",
            filled: false,
            id: "3"
        },
        {
            content: "",
            filled: false,
            id: "4"
        },
        {
            content: "",
            filled: false,
            id: "5"
        },
        {
            content: "",
            filled: false,
            id: "6"
        },
        {
            content: "",
            filled: false,
            id: "7"
        },
        {
            content: "",
            filled: false,
            id: "8"
        }
    ])

    function markField(e) {
        if (props.status === 1) {
            e.preventDefault()
        } else {
            let marker = null
            let error = false
            props.turn === "x" ? marker = "X" : marker = "O"
            updateFields(fields.map(field => {
                if (field.id === e.target.id) {
                    if (!field.filled) {
                        field.content = marker
                        field.filled = true
                        return field
                    } else {
                        error = true
                    }
                }
                return field
            }))
            props.checkStatus(fields)
            !error ? props.turnUpdater() : props.errorNotification()
        }
    }

    function refresh() {
        updateFields([
            {
                content: "",
                filled: false,
                id: "0"
            },
            {
                content: "",
                filled: false,
                id: "1"
            },
            {
                content: "",
                filled: false,
                id: "2"
            },
            {
                content: "",
                filled: false,
                id: "3"
            },
            {
                content: "",
                filled: false,
                id: "4"
            },
            {
                content: "",
                filled: false,
                id: "5"
            },
            {
                content: "",
                filled: false,
                id: "6"
            },
            {
                content: "",
                filled: false,
                id: "7"
            },
            {
                content: "",
                filled: false,
                id: "8"
            }
        ])
        props.turnUpdater(true)
        props.updateStatus(-1)
        props.updateCoordinates([])
    }

    return (
        <div className="playground">
            {fields.map(field => {
                    if (props.coordinates.includes(field.id)) {
                        return (
                            <Field key={field.id} value={field.content} id={field.id} clickHandler={markField}
                                   status={props.status}/>
                        )
                    }
                    return (
                        <Field key={field.id} value={field.content} id={field.id} clickHandler={markField}/>
                    )

                }
            )}
            <button className={lightMode ? "refresh-button" : "refresh-button__dark-mode"} onClick={refresh}><span>&#128260;</span> Refresh</button>
        </div>
    )
}

export default Playground