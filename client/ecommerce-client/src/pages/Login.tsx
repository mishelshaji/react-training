import * as Yup from "yup";
import {SubmitHandler, useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import Button from "../components/Button.tsx";
import AuthService from "../common/services/authService.ts";
import {useState} from "react";
import AlertDanger from "../components/alerts/AlertDanger.tsx";

interface FormFields {
    email: string;
    password: string;
}

const validationSchema = Yup.object({
    email: Yup.string().email('Invalid email')
        .required('Email is required')
        .min(3, 'Email must be at least 3 characters')
        .max(25, 'Email must be at most 25 characters'),
    password: Yup.string()
        .required('Description is required')
        .min(6, 'Password must be at least 3 characters')
        .max(25, 'Password must be at most 25 characters'),
})

function Login() {

    const [error, setError] = useState<string | null>(null);

    const {register, handleSubmit, formState} = useForm<FormFields>({
        mode: 'all',
        resolver: yupResolver(validationSchema)
    });

    const handleOnSubmit: SubmitHandler<FormFields> = (data) => {
        console.log(data);
        AuthService.authenticate(data.email, data.password)
            .then(res => AuthService.setToken(res.data.data))
            .catch(error => setError(error.response.data.message));
    }

    return (
        <div className="container mx-auto">
            <h1 className="text-4xl text-center">Login</h1>

            <div className="grid grid-cols-3 gap-4">
                <div></div>
                <form onSubmit={handleSubmit(handleOnSubmit)}>
                    <div>
                        <label>Email</label>
                        <input type="email"
                               className={'border border-gray-400 focus:outline-2 focus:outline-indigo-200 p-2 w-full rounded'}
                               {...register('email')}/>
                        {formState.errors.email && <p className="text-red-600">{formState.errors.email.message}</p>}
                    </div>
                    <div>
                        <label>Password</label>
                        <input type="password"
                               className={'border border-gray-400 focus:outline-2 focus:outline-indigo-200 p-2 w-full rounded'}
                               {...register('password')}/>
                        {formState.errors.password && <p className="text-red-600">{formState.errors.password.message}</p>}
                    </div>
                    <div className="flex flex-col gap-4 justify-end mt-2">
                        {error && <AlertDanger message={error}/>}
                        <Button type="submit" content="Login" severity="primary"/>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login;
