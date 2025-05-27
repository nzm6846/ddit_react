import {useState} from 'react'

import './App.css'

function Morning() {
    const [msg, setMsg] = useState("Good Morning")

    const myclick = () => {
        setMsg("Good Evening")
    }

    return (
        <>
            {msg}
            <button onClick={myclick}>
                CLICK
            </button>

        </>
    )
}

export default Morning
