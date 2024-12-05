import { useEffect, useState } from "react"

export default function List({getitems}){
    const [items, setItems] = useState([]);
    useEffect(()=>{
        setItems(getitems(3));
    },[getitems])
    return (
        <>
            {items.map((i)=>(
                <p key={i}>{i}</p>
            ))}
        </>
    )
}