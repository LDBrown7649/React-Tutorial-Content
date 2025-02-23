import React from 'react'

const Greet = (props) => {
    const {name, heroName, children, overrideColor} = props;
    return (
        <div>
            <h1>Hello {name} a.k.a {heroName}</h1>
            <button style = {{backgroundColor: overrideColor ? overrideColor : "white", color:"red"}}>
                Text
            </button>
            {children}
        </div>
    )
}

export default Greet