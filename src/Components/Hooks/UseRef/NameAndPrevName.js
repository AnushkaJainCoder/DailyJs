import { useEffect, useRef, useState } from "react"

export default function NameAndPrevName(){
    const [name, setName] = useState('');
    const prevName = useRef('');
    useEffect(()=>{
        prevName.current = name;
    },[name])
    return (
        <>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)}/>
        <div>My name was {} and now is {name}</div>
        
        </>
    )
}