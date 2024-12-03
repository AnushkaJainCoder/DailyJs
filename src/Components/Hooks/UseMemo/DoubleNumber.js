import { useState } from "react"

export default function DoubleNumber(){
    const [number, setNmuber] = useState();
    const doubleNumber = () => {
        return number * 2;
    }
    const [theme, setTheme] = useState(false)

    return (
        <>
            <input type = "text"  onChange={e => setNmuber(e.target.value)}/>
            <button onClick={() => setTheme(!theme) }>Change Theme</button>
            <div style={{backgroundColor: theme === true? 'white': 'black',
                 color: theme === true? 'black': 'white'}}>{doubleNumber()}</div>
        </>
    )
}