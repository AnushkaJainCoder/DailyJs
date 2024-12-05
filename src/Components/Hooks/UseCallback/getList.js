import { useCallback, useState } from "react"
import List from "./List";
// import {List} from './list'

export default function DisplayItems(){
    const [number, setNumber] = useState(0);
    const [dark, setDark] = useState(false);

    const getitems = useCallback(() =>{
        return [number+1, number + 2, number + 3];
    },[number]);

    const theme = {
        backgroundColor: dark ? '#333' : '#FFF',
        color: dark ? '#FFF' : '#333'
    }

    return (
        <>
        <div style={theme}>
            <input type="number" value={number} onChange={(e) => setNumber(Number(e.target.value))}/>
            {/* <button >Toggle theme</button> */}
            {/* <List items/> */}
            <button onClick={() => setDark(prev => !prev)}>Change Theme</button>
            <List getitems={getitems}/>

            {/* {items().map((i)=>(
                <p key={i}>{i}</p>
            ))} */}
        </div>
        </>
    )
}