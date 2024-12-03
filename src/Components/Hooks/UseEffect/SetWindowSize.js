import { useEffect, useState } from "react"

export default function SetWindowSize(){
    
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
   
    useEffect(()=>{
        window.addEventListener('resize', () =>{
            setWindowWidth(window.innerWidth);
        })
    }, []);

    return (
        <>
            <div>{window.innerWidth}</div>

        </>
    )
}