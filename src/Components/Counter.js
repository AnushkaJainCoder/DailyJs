import React, { useState } from "react";

// ----------------------------- functionsl compnent------------------
// export default function Counter() {
//     const [count, setCount] = useState(0);
//     const handleChange = () => {
//         setCount(count + 1);
//     }
//     return (
//         <>
//             <p>{count}</p>
//             <button onClick={handleChange}>+</button>

//         </>
//     )
// }



// --------------------------------class components----------------
export default class Counter extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            count: 0
        }
    }
    handleChange(){
        this.setState({
            count: this.count+1
        })
    }
    render() {
        return (
            <>
                <p>
                    {this.state.count}
                </p>
                <button onClick={() =>this.handleChange} >+</button>
            </>
        )
    }
}


// ------------------------------normal inc/dec------------------------------
// export default function Button(){
//     const [count, setCount] = useState(0);
//     const handleClickInc = () => {
//         setCount(count+1);
//     }
//     const handleClickDec = () => {
//         setCount(count-1);
//     }

//     return (
//         <>
//             <p>{count}</p>
//             <button onClick= {handleClickInc}>+</button>
//             <button onClick= {handleClickDec}>-</button>

//             {/* <button onClick= {()=>setCount(count-1)}>-</button> */}
//         </>
//     )
// }