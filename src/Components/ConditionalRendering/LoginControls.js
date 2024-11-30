import React from "react";

export default class LoginControls extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

            isLoggedIn: false
        }
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange = () => {
        this.setState(prevState => ({
            isLoggedIn: !prevState.isLoggedIn
        }))
    }
    render() {
        let butt;
        let txt;
        if (this.state.isLoggedIn) {
            butt = <button onClick={this.handleChange}>logout</button>
            console.log('logout');
            txt = <p> hello anu</p>
        }
        else {

            butt = <button onClick={this.handleChange}>login</button>
            console.log('login');
            txt = <p>hello unknow</p>
        }
        return (
            <div >
                {butt}
                {txt}
            </div>
        )
    }
}