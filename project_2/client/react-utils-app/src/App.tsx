import './App.css'
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "./state/store.ts";
import {increment, decrement} from "./state/counterSlice.ts";

function App() {
    const count = useSelector((state: RootState) => state.counter.value);
    const dispatch = useDispatch();

    return (
        <div className="App">
            <h1 className="text-center text-4xl">App Component</h1>
            <h2 className="text-center text-2xl">{count}</h2>

            <button className="bg-amber-500 p-2 rounded" onClick={()=> dispatch(increment())}>Increase</button>
            <button className="bg-amber-500 p-2 rounded" onClick={()=> dispatch(decrement())}>Decrease</button>
        </div>
    )
}

export default App
