import { useState } from "react"
import ComponentC from "./ComponentC"
// import '...//'

export default function ComponentB(){
    // const [user, setUser] = useState('')
    return (
        <>
            <div style={{border: '2px solid ', padding: '25px'}}>
                <h1>Component 2</h1>
                <h2>Hello </h2>
                <ComponentC />
                
            </div>

        </>
    )
}