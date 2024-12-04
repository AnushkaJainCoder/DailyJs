import { useEffect, useState } from "react"

export default function NameChange(){

    const [name,setName] = useState('');
    const [renderCount, setRenderCount] = useState(0);

    useEffect(()=>{
        setRenderCount(prev => prev + 1);
    },[name])
    return (
        <>
            <input type="text" onChange={(e) => setName(e.target.value)}/>
            <div>My name is {name}</div>
            <div>render {renderCount}</div>
            
        </>
    )
}