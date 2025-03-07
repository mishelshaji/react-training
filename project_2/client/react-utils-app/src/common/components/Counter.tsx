import {useState} from "react";

function Counter(){
    const [count, setCount] = useState(0);
    return (
        <div>
            <p data-testid="count">Count: {count}</p>
            <button data-testid="increment-button" onClick={() => setCount(count + 1)}>Increment</button>
        </div>
    )
}

export default Counter
