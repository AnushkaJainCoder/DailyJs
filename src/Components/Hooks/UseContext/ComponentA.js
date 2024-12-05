import { createContext, useContext, useState } from "react"
import ComponentB from "./ComponentB"

export const UserContext = createContext();

export default function ComponentA(){

    const [user, setUser] = useState('Anushka ');

    return (
        <>
           <div style={{border: '2px solid ', padding: '25px'}}>
                <h1>Component 1</h1>
                <h2>Hello {user}</h2>
                <UserContext.Provider value={user}>
                     <ComponentB user = {user}/>
                </UserContext.Provider>
                
            </div>

        </>
    )
}