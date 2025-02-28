import {useEffect, useState} from "react";

function Cleanup(){
    const [data, setData] = useState(0);
    useEffect(() => {
        console.log('Established a connection with server...')

        return () => {
            console.log('Disconnected from server.');
        }
    }, []);

    return (
        <>
            <h1 className={'text-center text-4xl'}>Cleanup {data}</h1>
            <button onClick={()=>{setData(data+1)}}>Click Me</button>
        </>
    )
}

export default Cleanup;
