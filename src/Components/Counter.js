import React, { Component } from 'react'

class Counter extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         count: 0
      };
    }

    increment() {
        const {count} = this.state;
        this.setState((prevState, props) => ({
            count: prevState.count + props.addValue
        }),
        () => console.log(count)
    );
    }

    incrementFive() {
        for (let i = 0; i < 5; i++) {
            this.increment();
        }
    }

    render() {
        const {count} = this.state;
        return (
            <div>
                <div>Count - {count}</div>
                <button onClick={() => this.increment()}>Increment</button>
            </div>
        )
    }
}

export default Counter