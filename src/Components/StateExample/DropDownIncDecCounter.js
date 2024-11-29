import React from "react";

//-------------------------------select dropdown then inc/dec-------------
export default class Button extends React.Component {

        constructor(props) {
            super(props);
            this.state = {
                count: 0,
                color: 'red',
                selectedValue: 'Select',
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
    
        // set dropdown value
        handleChange = (e) => {
            this.setState({
                selectedValue: e.target.value
            })
        }
    
        handlePlusOrMinus = () => {
    
            if (this.state.selectedValue === 'Increase') {
                console.log(this.state.selectedValue);
                this.setState({
                    count: this.state.count + 1
                })
            }
            else {
                console.log(this.state.selectedValue);
    
                this.setState({
                    count: this.state.count - 1
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
    
    
                    {/* inc/dec btn based on dropdown option selected */}
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
    
    
    