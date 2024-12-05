import { createContext, useContext, useState } from "react"
import ComponentB, { nameContext } from "./ComponentB"

export const UserContext = createContext();

export default function ComponentA(){

    const [user, setUser] = useState('Anushka Jain ');
    // const name = useContext(nameContext);

    return (
        <>
           <div style={{border: '2px solid ', padding: '25px'}}>
                <h1>Component 1</h1>
                <h2>Hello {user}</h2>
                {/* <h3>Hello {name}</h3> */}
                <UserContext.Provider value={user}>
                     <ComponentB user = {user}/>
                </UserContext.Provider>
                
                
            </div>

        </>
    )
}