import React, {useState} from 'react';

const Counter = () => {
    const [count, setCount] = useState(0);
    const increment = () => {
        setCount(count + 1)
    }

    const decrement = () => {
        setCount(count - 1)
    }
    return (
        <div>
            <h1>{count}</h1>
            <div><button onClick={increment}>Плюс</button></div>
            <div><button onClick={decrement}>Минус</button></div>
        </div>
    );
};

export default Counter;