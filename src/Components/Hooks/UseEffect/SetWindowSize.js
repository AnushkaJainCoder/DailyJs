import { useEffect, useState } from "react"

export default function SetWindowSize(){
    
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
   
    const handleResize = () => {
        setWindowWidth(window.innerWidth);
    }
    
    useEffect(()=>{
        window.addEventListener('resize', handleResize)

        return () =>{
            window.removeEventListener('resize', handleResize)
        }
    }, []);

    return (
        <>
            <div>{window.innerWidth}</div>

        </>
    )
}