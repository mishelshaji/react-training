import {FC} from "react";

interface AlertProps{
    message: string;
    title?: string;
}

const Alert: FC<AlertProps> = ({message, title='A title'}) => {
    return (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
            {title && <div><strong className="font-bold">{title}</strong></div>}
            <span className="block sm:inline">{message}</span>
        </div>
    )
}

export default Alert
