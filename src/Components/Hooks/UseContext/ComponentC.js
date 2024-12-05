import { useState } from "react"
import ComponentD from "./ComponentD"
// import '...//'

export default function ComponentC(props){
    const [user, setUser] = useState('')
    return (
        <>
            <div style={{border: '2px solid ', padding: '25px'}}>
            <h1>Component 3</h1>
                {/* <h1>Component 1</h1> */}
                <h2>Hello {props.user}</h2>
                <ComponentD user = {props.user}/>
            </div>

        </>
    )
}