import { useEffect, useRef, useState } from "react"

export default function NameChange(){

    const [name,setName] = useState('');
    // const [renderCount, setRenderCount] = useState(0);
    const renderCount = useRef(1);

    useEffect(()=>{
        // setRenderCount(prev => prev + 1);
        renderCount.current = renderCount.current + 1;
    })
    return (
        <>
            <input type="text" onChange={(e) => setName(e.target.value)}/>
            <div>My name is {name}</div>
            <div>render {renderCount.current}</div>
            
            
        </>
    )
}