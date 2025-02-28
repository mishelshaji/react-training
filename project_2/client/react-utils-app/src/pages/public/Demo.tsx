import {ChangeEvent, useRef, useState} from "react";
import Alert from "../../common/components/Alert.tsx";

function Demo(){
    const inputRef = useRef<HTMLInputElement>(null);

    const handleClick = () => {
        console.log(inputRef.current!.value);
    }

    return (
        <>
            <Alert message={'Greeting from React App'} title={'Custom title'} />
            <input className="border"
                type="text" ref={inputRef}
            />

            <button className="bg-amber-600 p2 rounded" onClick={handleClick}>Submit</button>
        </>
    );
}

export default Demo
