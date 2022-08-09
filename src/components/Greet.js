import React from "react";

// function Greet() {
//     return <h1>Hello Chaithra!!!</h1>
// }

const Greet = (props) => {
    // console.log(props);
    return (
        <>
            <h1>Hiii {props.name} a.k.a {props.heroName}!!</h1>
            {props.children}
        </>
    )
}


export default Greet;