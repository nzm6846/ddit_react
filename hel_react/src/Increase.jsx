import {useState} from 'react'

import './App.css'

function Increase() {
    const [count, setCount] = useState("100")

    const myclick = () => {
        let number = parseInt(count);
        number++;
        setCount(number);
    }

    return (
        <>
            {count}
            <button onClick={myclick}>
                Inclease
            </button>

        </>
    )
}

export default Increase
