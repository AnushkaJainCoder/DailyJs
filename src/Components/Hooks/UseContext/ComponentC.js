import { useContext, useState } from "react"
import ComponentD from "./ComponentD"
import { UserContext } from "./ComponentA"
// import '...//'

export default function ComponentC() {

    const user = useContext(UserContext);

    return (
        <>
            <div style={{ border: '2px solid ', padding: '25px' }}>
                <h1>Component 3</h1>
                <h2>Hello {user}</h2>
                <ComponentD />
            </div>

        </>
    )
}