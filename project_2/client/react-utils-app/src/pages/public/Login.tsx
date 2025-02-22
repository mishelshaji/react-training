import Button from "../../common/components/Button.tsx";
import {Link} from "react-router-dom";
import Input from "../../common/components/Input.tsx";
import {FormProvider, useForm} from "react-hook-form";

function Login(){
    const methods = useForm();

    function handleFormSubmit(data:any){
        console.log(data);
    }

    return (
        <>
            <div className="flex items-center justify-center min-h-screen bg-gray-100">
                <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-md">
                    <h2 className="text-4xl font-bold text-center">Login</h2>
                    <FormProvider {...methods}>
                        <form onSubmit={methods.handleSubmit(handleFormSubmit)}>
                            <div>
                                <Input name="email" label="Email" placeholder="someone@example.com" type="email" />
                            </div>
                            <div>
                                <Input name="password" label="Password" placeholder="********" type="password" />
                            </div>
                            <Button content="Login" type="submit" severity="primary" />
                        </form>
                    </FormProvider>
                    <p className="mt-4 text-sm text-center text-gray-600">
                        Don't have an account?
                        <Link to="/register" className="text-blue-600 hover:underline">Sign up</Link>
                    </p>
                </div>
            </div>
        </>
    )
}

export default Login
