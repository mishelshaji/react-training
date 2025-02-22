import { useFormContext } from "react-hook-form"

export interface InputProps {
    name: string;
    label: string;
    placeholder: string | '';
    type: 'text' | 'email' | 'password' | 'number';
}

function Input(props: InputProps) {
    const {register, formState: {errors}} = useFormContext();
    return (
        <>
            <label className="block text-sm font-medium text-gray-700">{props.label}</label>
            <input
                {...register(props.name)}
                type={props.type}
                placeholder={props.placeholder}
                className="my-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-500"
            />
            {errors[props.name] && <p className="text-red-500">{(errors[props.name] as any).message}</p>}
        </>
    )
}

export default Input;
