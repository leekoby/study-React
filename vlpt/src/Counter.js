import React, { useState } from "react";

function Counter() {
    const [number, setNumber] = useState(0);

    const onIncrease = () => {
        setNumber(preNumber => preNumber + 1);

    }
    const onDecrease = () => {
        console.log('-1');
        setNumber(preNumber => preNumber - 1);
    }
    return (

        <div>
            <h1>{number}</h1>
            <button onClick={onIncrease}>+1</button>
            <button onClick={onDecrease}>-1</button>
        </div>
    )
}

export default Counter;
