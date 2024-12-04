import { useEffect, useMemo, useRef, useState } from "react"

export default function DoubleNumber(){
    const [number, setNmuber] = useState(0);
    const [theme, setTheme] = useState(false);
    const startTimeRef = useRef(0);

    const doubleNumber = useMemo(() => {
        startTimeRef.current = performance.now();
        for(let i = 0; i < 1000;i++){}
        const endtime = performance.now();
        const dration = endtime - startTimeRef.current;
        console.log(`time taken to change theme ${dration.toFixed(2)}ms`);
        return number * 2;
    },[number]);

    const handleChange = () => {
        // startTimeRef.current = performance.now();
        setTheme(!theme);
    }

    const themeStyle = useMemo(() => {
        return{
            backgroundColor: theme ? 'white': 'black',
            color: theme ? 'black': 'white'
        }

        
    },[theme]);

    useEffect(()=>{
        // const endtime = performance.now();
        // const dration = endtime - startTimeRef.current;
        console.log("theme changed");
       
        
    },[themeStyle]);

    return (
        <>
            <input type = "text" value={number}  onChange={e => setNmuber(e.target.value)}/>
            <button onClick={handleChange}>Change Theme</button>
            <div style={themeStyle}>{doubleNumber}</div>
        </>
    )
}