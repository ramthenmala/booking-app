import { useState } from "react";
import { EyeIcon, EyeOffIcon } from "lucide-react";
import { Input } from "@nextui-org/input";
import { useForm } from "react-hook-form";
import { RegisterFormDataType } from "../types/RegisterFormDataTypes";
import { Button } from "@nextui-org/button";
import { useMutation, useQueryClient } from "react-query";
import * as apiClient from "../client/api-client";
import { Link, useNavigate } from "react-router-dom";
import { ToastMessageType } from '../types/ToastMessageType'
import ToastProvider from "../Components/ToastProvider";

const SignIn = () => {
    const navigate = useNavigate();
    const queryClient = useQueryClient();
    const { register, handleSubmit, formState: { errors }, } = useForm<Pick<RegisterFormDataType, 'email' | 'password'>>();
    const [toast, setToast] = useState<ToastMessageType | null>(null);
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => setIsVisible(!isVisible);

    const mutation = useMutation(apiClient.signIn, {
        onSuccess: async () => {
            setToast({
                message: 'Signin Successfull',
                type: 'success' as Extract<ToastMessageType, { type: "success" }>
            })
            await queryClient.invalidateQueries('validateToken')
            navigate('/');
        },
        onError: (error: Error) => {
            setToast({
                message: error.message,
                type: 'error' as Extract<ToastMessageType, { type: "error" }>
            })
        }
    },)

    const onLoginSubmit = handleSubmit((data) => {
        mutation.mutate(data)
    })

    return (
        <div className="flex flex-col gap-5" onSubmit={onLoginSubmit}>
            <form className="flex flex-col gap-5 max-w-xl w-full mx-auto">
                <h2 className="text-3xl font-bold mb-4">Sign in</h2>

                <div className="w-full">
                    <Input
                        isRequired
                        type="email"
                        label="Email"
                        isInvalid={errors.email && true}
                        errorMessage={errors.email && errors.email.message}
                        {...register('email', {
                            required: 'Please enter your email address to continue.',
                            pattern: {
                                value: /\S+@\S+\.\S+/,
                                message: 'Please enter a valid email address in the format: example@domain.com.',
                            },
                        })}
                    />
                </div>
                <div className="w-full">
                    <Input
                        isRequired
                        label="Password"
                        isInvalid={errors.password && true}
                        errorMessage={errors.password && errors.password.message}
                        type={isVisible ? "text" : "password"}
                        endContent={
                            <button className="focus:outline-none" type="button" onClick={toggleVisibility} aria-label="toggle password visibility">
                                {isVisible ? (
                                    <EyeIcon className="text-2xl text-default-400 pointer-events-none" />
                                ) : (
                                    <EyeOffIcon className="text-2xl text-default-400 pointer-events-none" />
                                )}
                            </button>
                        }
                        {...register('password', {
                            required: 'Please enter a password to secure your account.',
                            minLength: {
                                value: 6,
                                message: 'Password should be at least 6 characters long for better security.'
                            }
                        })}
                    />
                </div>

                {toast && (
                    <ToastProvider
                        message={toast.message}
                        type={toast.type}
                        onClose={() => setToast(null)}
                    />
                )}

                <div className="flex justify-center items-center gap-4">
                    <span className="text-sm">Not Registered? <Link to='/register' className=" underline">Create an account here</Link></span>
                    <Button radius="full" type="submit" variant="solid" color="primary">
                        Submit
                    </Button>
                </div>
            </form>
        </div>
    )
}

export default SignIn