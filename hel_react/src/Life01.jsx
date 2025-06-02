import {useEffect, useState} from 'react'

import './App.css'

function Life01() {
    const [msg, setMsg] = useState("LIFE01")

     useEffect(() => {
        console.log('LIFE01 mount');

        // componentWillUnmount 역할
        return () => {
          console.log('LIFE01 unmount');
        };
    }); // count가 바뀔 때마다 실행됨

    return (
        <>
            {msg}

        </>
    )
}

export default Life01
