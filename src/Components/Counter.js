import React, { Component } from 'react'

class Counter extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         count: 0
      };
    }

    increment() {
        this.setState((prevState, props) => ({
            count: prevState.count + props.addValue
        }),
        () => console.log(this.state.count)
    );
    }

    incrementFive() {
        for (let i = 0; i < 5; i++) {
            this.increment();
        }
    }

    render() {
        return (
            <div>
                <div>Count - {this.state.count}</div>
                <button onClick={() => this.increment()}>Increment</button>
            </div>
        )
    }
}

export default Counter