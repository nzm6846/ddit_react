
import {useRef, useState} from "react";
import MyInput from "./MyInput.jsx";

function App() {
    let obj = useRef(null);
    let [myobj,setMyobj] = useState("hello");

    const myclick = () =>{
        obj.current.value = "Bye";
        setMyobj("Bye");
    }


  return (
    <>
        <input type="text" ref={obj} defaultValue="hello" readOnly/><br/>
        <MyInput value={myobj} readOnly/><br/>
        <button onClick={myclick}>Change Text</button>
    </>
  )
}

export default App;
