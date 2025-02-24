
import DisplayUpdatedCount from "./DisplayUpdatedCount.tsx";
import {CounterContext} from "../../../state/CounterContext.ts";
import {useContext, useState} from "react";

function ContextDemo() {
    const count = useContext(CounterContext);
    const [newCount, setNewCount] = useState(0);
    return (
        <div>
            <h1>Context Demo - Click To Change Count</h1>
            <p>Current Count: {count}</p>
            <button onClick={()=> setNewCount(newCount + 1)}>+ Count</button>
            <CounterContext.Provider value={newCount}>
                <DisplayUpdatedCount />
            </CounterContext.Provider>
        </div>
    )
}

export default ContextDemo;
