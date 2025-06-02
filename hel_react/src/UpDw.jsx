

import './UpDw.css'
import {useEffect, useRef, useState} from "react";

function UpDw() {
    let [mine,setMine] = useState("");
    let com = useRef(0)
    let [res,setRes] = useState("");

    const myclick =() => {
        console.log(com.current);
        if(parseInt(mine) == com.current){
            setRes(prev => prev +`${mine} 정답\n`);
            setTimeout(()=>{
              alert("정답")
            },1000)
        }else if(parseInt(mine) < com.current){
            setRes(prev => prev +`${mine} 작다\n`);
        }else{
            setRes(prev => prev +`${mine} 크다\n`);
        }
         setMine("");
    }

    useEffect(() => {
        com.current = parseInt(Math.floor(Math.random()*99+1));
    },[]);


    return (
        <>

            <table>
                <tbody>
                <tr>
                    <td>맞출수</td>
                    <td>
                        <input type="text" id="it" onChange={(e)=>{setMine(e.target.value)}} value={mine}/>
                    </td>
                </tr>
                <tr>
                    <td colSpan="2">
                        <input type="button" value="맞춰보기" onClick={myclick}/>
                    </td>
                </tr>
                <tr>
                    <td colSpan="2">
                        <div id="mydiv" >{res.split("\n").map((line, idx) => (
                          <span key={idx}>
                            {line}
                            <br />
                          </span>
                        ))}
                        </div>
                    </td>
                </tr>
                </tbody>
            </table>
        </>
    )
}

export default UpDw
