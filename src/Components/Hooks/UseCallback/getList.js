import { useCallback, useState } from "react"
import List from "./List";
// import {List} from './list'

export default function DisplayItems(){
    const [number, setNumber] = useState('');

    const getitems = useCallback(() =>{
        return [number+1, number + 2, number + 3];
    },[number]);

    return (
        <>
            <input type="number" value={number} onChange={(e) => setNumber(Number(e.target.value))}/>
            {/* <button >Toggle theme</button> */}
            {/* <List items/> */}
            <List getitems={getitems}/>

            {/* {items().map((i)=>(
                <p key={i}>{i}</p>
            ))} */}
        </>
    )
}