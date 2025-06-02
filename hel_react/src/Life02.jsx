import {useEffect, useState} from 'react'

import './App.css'

function Life02() {
    const [msg, setMsg] = useState("LIFE02")

     useEffect(() => {
        console.log('LIFE02 mount');

        // componentWillUnmount 역할
        return () => {
          console.log('LIFE02 unmount');
        };
    }); // count가 바뀔 때마다 실행됨

    return (
        <>
            {msg}

        </>
    )
}

export default Life02
