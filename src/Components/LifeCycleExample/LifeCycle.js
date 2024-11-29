import React from "react";

export default class LifecycleCounter extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            count: 0,
            date: new Date()
        }
        this.handleChange = this.handleChange.bind(this)
    }
    componentDidMount(){
        console.log('component mounted done ', this.state.count);
        this.timerId = setInterval(
            () => {
                this.tick()
            },1000
        )
    }
    componentDidUpdate(prevProps, prevState){
        if(prevState.count != this.state.count){
            console.log('component updated from', prevState.count, 'to', this.state.count);
            
        }
    }
    componentWillUnmount(){
        console.log('compnonent will amount final:', this.state.count);
        clearInterval(this.timerId);
    }
    tick = () => {
        this.setState({
            date: new Date()
        })
    }
    handleChange = () =>{
        this.setState({
            count: this.state.count + 1
        })
    }
    render(){
        return(
            <>
                <p> {this.state.count}</p>
                <button onClick={this.handleChange}>+</button>
                <p> {this.state.date.toLocaleTimeString()}</p>
            </>
        )
    }
}