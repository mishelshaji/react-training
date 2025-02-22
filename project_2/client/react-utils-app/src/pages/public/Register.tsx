import Button from "../../common/components/Button.tsx";
import {Link} from "react-router-dom";
import Input from "../../common/components/Input.tsx";
import {FormProvider, useForm} from "react-hook-form";

function Register(){
    const methods = useForm();
    return (
        <>
            <div className="flex items-center justify-center min-h-screen bg-gray-100">
                <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-md">
                    <h2 className="text-4xl font-bold text-center">Register</h2>
                    <FormProvider {...methods}>
                        <form>
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <Input name="first_name" label="First Name" placeholder="John" type="text"/>
                                </div>
                                <div>
                                    <Input name="last_name" label="Last Name" placeholder="Doe" type="text"/>
                                </div>
                            </div>
                            <div>
                                <Input name="email" label="Email" placeholder="someone@example.com" type="email"/>
                            </div>
                            <div>
                                <Input name="password" label="Password" placeholder="********" type="password"/>
                            </div>
                            <div>
                                <Input name="c_password" label="Confirm Password" placeholder="********" type="password"/>
                            </div>
                            <Button content="Register" type="submit" severity="primary"/>
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

export default Register
