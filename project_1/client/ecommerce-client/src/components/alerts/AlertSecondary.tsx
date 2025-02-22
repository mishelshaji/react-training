import AlertProps from "./alertProps.ts";


function AlertSecondary(props: AlertProps){
    return (
        <div className={'bg-gray-200 border border-gray-400 rounded p-2'}>
            {props.title && (
                <>
                    <h1 className={'font-bold text-2xl mb-2'}>{props.title}</h1>
                    <hr className={'text-gray-400 mb-2'}/>
                </>
            )}
            <p className={'text-gray-800'}>{props.message}</p>
        </div>
    )
}

export default AlertSecondary;
