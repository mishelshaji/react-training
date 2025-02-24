import {useContext} from "react";
import {CounterContext} from "../../../state/CounterContext.ts";

function DisplayUpdatedCount(){
    const userData = useContext(CounterContext)

    return (
        <>
            <h1>New Count: {userData}</h1>
        </>
    )
}

export default DisplayUpdatedCount;
