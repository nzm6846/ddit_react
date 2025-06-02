
import './App.css'

function MyProp({alt,src}) {


    return (
        <>
            속성:{alt} <br/>
            <img src={src}/>
        </>
    )
}

export default MyProp
