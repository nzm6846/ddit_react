
import './App.css'

function MyInput({value}) {
    console.log("a");
    return (
        <>
            <input type="text" value={value} readOnly/>
        </>
    )
}

export default MyInput
