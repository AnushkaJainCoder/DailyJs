import { useRef, useState } from "react"

export default function FocusText(){
    const [name, setName] = useState('');
    const inputRef = useRef();

    const focus = () => {
        console.log(inputRef.current);
        // inputRef.current.focus();
        inputRef.current.value = 'hello moto'
        
    }

    return (
        <>
            <input ref={inputRef} type="text" onChange={(e) => setName(e.target.value)}/>
            <div>My name is  {name}</div>
            <button onClick={focus}>Focus</button>
        </>
    )
}