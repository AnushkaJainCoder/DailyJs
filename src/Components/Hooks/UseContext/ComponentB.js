import { createContext, useState } from "react"
import ComponentC from "./ComponentC"
// import '...//'
// export const nameContext = createContext();

export default function ComponentB(){
    // const [user, setUser] = useState('')
    return (
        <>
            <div style={{border: '2px solid ', padding: '25px'}}>
                <h1>Component 2</h1>
                <h2>Hello </h2>
                {/* <nameContext.Provider value = {'NANU'}>
                    <ComponentC/>
                </nameContext.Provider> */}
                <ComponentC />
                
            </div>

        </>
    )
}