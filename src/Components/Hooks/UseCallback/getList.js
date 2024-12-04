import { useState } from "react"
// import {List} from './list'

export default function DisplayItems(){
    const [number, setNumber] = useState('');
    const items = () =>{
        return [number+1, number + 2, number + 3];
    }
    return (
        <>
            <input type="number" value={number} onChange={(e) => setNumber(Number(e.target.value))}/>
            {/* <button >Toggle theme</button> */}
            {/* <List items/> */}
            {/* <List */}

            {items().map((i)=>(
                <p key={i}>{i}</p>
            ))}
        </>
    )
}