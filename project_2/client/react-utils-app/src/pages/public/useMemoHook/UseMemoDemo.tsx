import {useEffect, useMemo, useState} from "react";

function UseMemoDemo(){
    const [value, setValue] = useState(0);
    const [count, setCount] = useState(0);

    const sum = useMemo(()=>{
        let result = 0;
        for (let i = 0; i < value; i++) {
            result += i;
        }
        console.log('From use memo hook!')
        return result;
    }, [value])

    useEffect(() => {
        console.log('From use effect hook!');
    });

    return (
        <>
            <p>The sum is: {sum}</p>
            <p>The sum is: {count}</p>
            <button className={'bg-amber-500 p-2 rounded'} onClick={()=> setValue(value + 1)}>+ Number</button>
            <button className={'bg-indigo-500 p-2 rounded'} onClick={()=> setCount(count + 1)}>+ Count</button>
        </>
    )
}

export default UseMemoDemo;
