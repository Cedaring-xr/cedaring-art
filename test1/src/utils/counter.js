import React, { Component } from "react";


class Counter extends Component {

    constructor(props) {
        super(props)

        this.state = {
            count: 0
        }
    }

    increment() {
        this.setState((prevState, props) => ({
            count: prevState.count + 1
        }))
    }

    render() {
        return (
            <div>
                <h5>{this.state.count}</h5>
                <button onClick={()=> this.increment()}>Add</button>
            </div>
        )
    }
}

export default Counter;