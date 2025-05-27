import {useState} from 'react'

import './Gugu.css'

function Hol() {
    const [mine, setMine] = useState(".");
    const [com, setCom] = useState("..");
    const [res, setRes] = useState("...");

const arr= ["홀","짝"];

const myClick = () =>{

    let ran = Math.floor(Math.random()*2);


    console.log("com :",com);

    setCom(arr[ran]);

    let a =com;
    console.log("a",a);

    console.log("com",com);

    if(arr[ran]===mine) {
        setRes("정답");
    }else{
        setRes("오답");
    }
    console.log(res);
}

    return (
        <>
            <table>
                <tbody>
                <tr>
                    <td> 나</td>
                    <td>
                        <input type="text" value={mine} onChange={e=> setMine(e.target.value)}/>
                    </td>
                </tr>
                <tr>
                    <td> 컴</td>
                    <td>
                        <input type="text" readOnly value={com}/>
                    </td>
                </tr>
                <tr>
                    <td> 결과</td>
                    <td>
                        <input type="text" readOnly value={res}/>
                    </td>
                </tr>
                <tr>
                    <td colSpan="2">
                        <input type="button" value="게임하기" onClick={myClick}/>
                    </td>
                </tr>
                </tbody>
            </table>

        </>
    )
}

export default Hol
