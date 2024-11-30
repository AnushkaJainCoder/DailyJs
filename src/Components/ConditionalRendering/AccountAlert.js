import React from "react";

export default class AccounBalance extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            accBal: 10000
        }
    }
    render(){
        return (
            <AccountAlert account={this.state.accBal}/>

        )
    }
}

function AccountAlert(props){
    return(
        <>
        {props.account == 0? <div style={{color: 'red'}}>Your account has not enough money</div> 
        : <div style={{color: 'green'}}>Account balance: {props.account}</div> }

            
        </>
    )
}