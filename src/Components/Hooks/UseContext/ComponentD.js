import { useContext, useState } from "react"
import { UserContext } from "./ComponentA"


// export const name = createContext('nanu');

export default function ComponentD(props){

    // const [user, setUser] = useState('');
    const user = useContext(UserContext);

    return (
        <>
            <div style={{border: '2px solid ', padding: '25px'}}>
            {/* <h1>Component 2</h1> */}
                <h1>Component 4</h1>
                <h2>Hello {user}</h2>
                
            </div>

        </>
    )
}