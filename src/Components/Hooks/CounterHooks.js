import { useState } from "react"

export default function CounterHooks(){
    const initialFun = () =>{
        console.log('initial fun');
        
        return 20
    }
    const [count, setCount] = useState(initialFun());

    const handleChange = () => {
        // overriding the value of count each time, bec we are using the same value of count each time
        // instead we can use the prev state value
        // setCount(count+1);
        // setCount(count+1);
        // setCount(count+1);

        setCount(prev => prev +1);
        // setCount(prev => prev +1);
        // setCount(prev => prev +1);
        // setCount(prev => prev +1);
        // setCount(prev => prev +1);
        
        
        
    }
    return (
        <>
            <p>{count}</p>
            <button onClick={handleChange}>+</button>
        
        </>
    )
}