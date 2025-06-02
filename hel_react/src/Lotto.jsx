import {useState} from 'react'

import './Lotto.css'

function Lotto() {
    const [l1, setl1] = useState("___");
    const [l2, setl2] = useState("__");
    const [l3, setl3] = useState("__");
    const [l4, setl4] = useState("__");
    const [l5, setl5] = useState("__");
    const [l6, setl6] = useState("__");

    const myclick = () => {
        	let arr45 = [
                1,2,3,4,5,	6,7,8,9,10,
                11,12,13,14,15,	16,17,18,19,20,
                21,22,23,24,25,	26,27,28,29,30,
                31,32,33,34,35,	36,37,38,39,40,
                41,42,43,44,45
            ];

          for(let i=0; i<1000; i++){
            let ran = Math.floor(Math.random()*45);
            let temp= arr45[0];
            arr45[0]=arr45[ran];
            arr45[ran]=temp;
          }

          for(let i=0; i<6; i++){
                for(let j=i+1; j<6; j++){
                    if(arr45[i]>arr45[j]){
                        let temp = arr45[i];
                        arr45[i]=arr45[j];
                        arr45[j]=temp;
                    }
                }
            }

          setl1(arr45[0].toString());
          setl2(arr45[1].toString());
          setl3(arr45[2].toString());
          setl4(arr45[3].toString());
          setl5(arr45[4].toString());
          setl6(arr45[5].toString());

    }

    return (
        <>

            <table>

                <tbody>
                <tr>
                    <td><span className="myspan">{l1}</span></td>
                    <td><span className="myspan">{l2}</span></td>
                    <td><span className="myspan">{l3}</span></td>
                    <td><span className="myspan">{l4}</span></td>
                    <td><span className="myspan">{l5}</span></td>
                    <td><span className="myspan">{l6}</span></td>
                </tr>
                <tr>
                    <td colSpan="6">
                        <button onClick={myclick}>로또생성하기</button>
                    </td>
                </tr>
                </tbody>
            </table>

        </>
    )
}

export default Lotto
