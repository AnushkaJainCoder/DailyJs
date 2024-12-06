import { useEffect, useState } from "react"

export default function IncOrDecButton(){

    const [inc, setInc] = useState(false);
    const [dec, setDec] = useState(false);
    const [count, setCount] = useState(0);

    let txt = '' ;



    
    if(inc === true){
        txt = <div>count is increasing</div>;
    }
    else if(dec === true) {
        txt = <div>count is dec</div>;
    }
    const handleInc = () =>{
        setDec(false);
        setInc(true);
       setCount(prev => prev + 1);
    }
    const handleDec = () =>{
        setInc(false)
        setDec(true)
       setCount(prev => prev-1);
    }
    

    return (
        <>
        {/* {(inc === true)?setCount(prev => prev + 1):setCount(prev => prev-1)} */}
            <p>{count}</p>
            <button onClick={handleInc}>+</button>
            <button onClick={handleDec}>-</button>
            <p>{txt}</p>
        </>  
    )
}