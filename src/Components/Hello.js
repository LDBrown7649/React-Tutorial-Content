import react from "react";

const Hello = () => {
    // return (
    //     <div>
    //         <h1>Hello Lachlan</h1>
    //     </div>
    // )
    return react.createElement('div', null, react.createElement('h1', null, 'Hello Lachlan2'))
}

export default Hello