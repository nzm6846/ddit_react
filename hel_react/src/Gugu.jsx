import {useState} from 'react'
import './Gugu.css'

function Gugu() {
    const [dan,setDan] = useState(".");
    const [txt,setTxt] = useState("..");

    const myClick = () =>{

     let code = '';

       for(let i=1; i<=9; i++){
        code +=`${dan} * ${i} = ${dan * i} \n`;
       }
       console.log(code);

       setTxt(code);


    }

    return (
        <>
            <table>
                <tbody>
                <tr>
                    <td>출력단수</td>
                    <td><input type="text" id="it" value={dan} onChange={(e)=>{setDan(e.target.value)}}/></td>
                </tr>
                <tr>
                    <td colSpan="2"><input type="button" value="출력하기"
                           id='btn'  onClick={myClick}/></td>
                </tr>
                <tr>
                    <td colSpan="2"><textarea id="ta" rows="13" cols="17" value={txt} readOnly></textarea>
                    </td>
                </tr>
                </tbody>
            </table>

        </>
    )
}

export default Gugu
