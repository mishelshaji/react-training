import {SubmitErrorHandler, SubmitHandler, useForm} from "react-hook-form";

function App() {

    interface FormValues{
        email: string;
        password: string;
    }

    const {register, handleSubmit, formState} = useForm<FormValues>();

    const handleOnSubmit: SubmitHandler<FormValues> = (data) => {
        console.log(data);
        console.log(formState.errors);
    }

    const handleOnFormSubmitError: SubmitErrorHandler<FormValues> = (error) => {
        console.log(error);
    }

    return (
        <>
            <form onSubmit={handleSubmit(handleOnSubmit, handleOnFormSubmitError)}>
                <div>
                    <label>Email</label>
                    <input type="email"
                           {...register('email')}
                        className={'border border-gray-800 focus:outline-2 focus:outline-indigo-200 p-1 rounded'}/>
                    {formState.errors.email && <p className="text-red-600">{formState.errors.email.message}</p>}
                </div>
                <div>
                    <label>Password</label>
                    <input type="password"
                           {...register('password', {required: 'Password is required'})}
                           className={'border border-gray-800 focus:outline-2 focus:outline-indigo-200 p-1 rounded'}/>
                    {formState.errors.password && <p className="text-red-600">{formState.errors.password.message}</p>}

                </div>

                <button type="submit">Submit</button>
            </form>
        </>
    )
}

export default App
