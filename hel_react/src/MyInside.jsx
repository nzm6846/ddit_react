
import './App.css'

function MyInside(p) {


    return (
        <>
            INSIDE START <br/>
            {p.children}
            INSIDE END

        </>
    )
}

export default MyInside
