import { useState } from "react"
import ComponentB from "./ComponentB"
// import '...//'

export default function ComponentA(){
    const [user, setUser] = useState('Anushka ')
    return (
        <>
           <div style={{border: '2px solid ', padding: '25px'}}>
           {/* <h1>Component 2</h1> */}
                <h1>Component 1</h1>
                <h2>Hello {user}</h2>
                <ComponentB user = {user}/>
                
            </div>

        </>
    )
}