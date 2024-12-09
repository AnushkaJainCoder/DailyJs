// import React from "react";

import { useState } from "react";

// export default class LoginControls extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {

//             isLoggedIn: false
//         }
//         this.handleChange = this.handleChange.bind(this);
//     }
//     handleChange = () => {
//         this.setState(prevState => ({
//             isLoggedIn: !prevState.isLoggedIn
//         }))
//     }
//     render() {
//         let butt;
//         let txt;
//         if (this.state.isLoggedIn) {
//             butt = <button onClick={this.handleChange}>logout</button>
//             console.log('logout');
//             txt = <p> hello anu</p>
//         }
//         else {

//             butt = <button onClick={this.handleChange}>login</button>
//             console.log('login');
//             txt = <p>hello unknow</p>
//         }
//         return (
//             <div >
//                 {this.state.isLoggedIn? <button onClick={this.handleChange}>logout</button> 
//                 : <button onClick={this.handleChange}>login</button> }
//                 {butt}
//                 {txt}
//             </div>
//         )
//     }
// }




export default function LoginControls(){

    const [login, setLogin] = useState(true);
    let but = '';
    let txt = '';
    // const but = <button onClick={handleChange}>Sigin</button>;
    const handleChange = () =>{
      setLogin(prev => !prev)
    }
    // if(login == true){
        but = 'Signout'
        txt = 'hi anu'
    // }
    // else{
    //     but = 'Signin'
    //     txt = 'hi unknown'
    // }

    return(
        <>
        {login?
            <>
                <button onClick={handleChange}>Signout</button>
                <div>{txt}</div>
            </> :
            <>
                <button onClick={handleChange}>Signin</button>
                <div>{txt}</div>
            </>}
              
        </>
    )
}
