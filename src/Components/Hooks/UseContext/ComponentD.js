import { useState } from "react"
// import '...//'

export default function ComponentD(props){
    const [user, setUser] = useState('')
    return (
        <>
            <div style={{border: '2px solid ', padding: '25px'}}>
            {/* <h1>Component 2</h1> */}
                <h1>Component 4</h1>
                <h2>Hello {props.user}</h2>
                
            </div>

        </>
    )
}