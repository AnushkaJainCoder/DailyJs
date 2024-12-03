import { useState } from "react"

export default function CounterHooks(){

    //--------------------------------- initialization using function
        // const initialFun = () =>{
        //     console.log('initial fun');
            
        //     return 20
        // }
        //-------------pass by reference useState(initialFun);
        // const [count, setCount] = useState(initialFun());

    //----------------------------------- initialization directly by passing value
        // const [count, setCount] = useState(0);

    // pass object
    const [state, setState] = useState({count: 4, age: 'not born'});
    const count = state.count;
    const age = state.age;



    const handleChange = () => {

        //--------------- overriding the value of count each time, bec we are using the same value of count each time
            // setCount(count+1);
            // setCount(count+1);
            // setCount(count+1);

        // --------------instead we can use the prev state value
            // setCount(prev => prev +1);
            // setCount(prev => prev +1);
            // setCount(prev => prev +1);
            // setCount(prev => prev +1);
            // setCount(prev => prev +1);

            //  if we are using object to initialize multiple things then make sure, you are setting 
            // the value for both othervise it will gonna override the prev value
            setState(prev => {
                return {
                    ...prev,
                    count: prev.count +1        // remove theme     
                }
            })
        
        
        
    }
    return (
        <>
            <p>{count}{age}</p>

            <button onClick={handleChange}>+</button>
        
        </>
    )
}