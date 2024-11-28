
// // functional components
// // export default function Quotes(props){
// //     return (
// //         <>
// //            Hi {props.name}, You can do it, Just have patience
// //         </>
// //     )
// // }

import React, { useState } from "react"

// import React from "react";


// // class components
// export default class Quotes extends React.Component{
//     constructor(props){
//         super(props);
//         this.state= {

//         }
//     }
//     render(){
//         return(
//             <>
//                 Hi {this.props.name}, You can do it, Just have patience

//             </>
//         )
//     }
// }


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

export default class Button extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            count: 0,
            color: 'red', 
            selectedValue : 'Select',
            btnText: ''

        }
    }
    handleClickInc = () => {
        this.setState({
            count: this.state.count + 1
        })
    }
    handleClickDec = () => {
        this.setState({
            count: this.state.count - 1
        })
    }

    // change clr of props content
    handleClickClr = () => {
        if (this.state.color == 'red') {
            this.setState({
                color: 'green'
            })
        }
        else {
            this.setState({
                color: 'red'
            })
        }
    }

    //
    handleChange = (e) => {
        this.setState({
            selectedValue: e.target.value
        })
    }

    handlePlusOrMinus = () =>{

        if(this.state.selectedValue ===  'Increase'){
            console.log(this.state.selectedValue);
            this.setState({
                count: this.state.count + 1
            })
        }
        else{
            console.log(this.state.selectedValue);
            
            this.setState({
                count: this.state.count -1
            })
        }
    }

    render() {
        return (
            <>
                <p >
                    {this.state.count}
                </p>
                <button onClick={this.handleClickInc}>+</button>
                <button onClick={this.handleClickDec}>-</button>
                <button onClick={this.handleClickClr}>Magic</button>

                <p style={{ color: this.state.color }}>{this.props.mssg}</p>
                
                <select value={this.state.selectedValue} onChange={this.handleChange}>
                   
                    <option>
                        Select
                    </option>
                    <option>
                        Increase
                    </option>
                    <option>
                        Decrease
                    </option>
                    
                </select>
                <button onClick={this.handlePlusOrMinus}>
                    {this.state.selectedValue}
                </button>

            </>

        )
    }
}
