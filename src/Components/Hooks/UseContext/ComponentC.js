import { useState } from "react"
import ComponentD from "./ComponentD"
// import '...//'

export default function ComponentC(){
    const [user, setUser] = useState('')
    return (
        <>
            <div style={{border: '2px solid ', padding: '25px'}}>
            <h1>Component 3</h1>
                {/* <h1>Component 1</h1> */}
                <h2>Hello </h2>
                <ComponentD />
            </div>

        </>
    )
}