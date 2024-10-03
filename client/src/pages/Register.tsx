import { useState } from "react";
import { EyeIcon, EyeOffIcon } from "lucide-react";
import { Input } from "@nextui-org/input";
import { useForm } from "react-hook-form";
import { RegisterFormDataType } from "../types/RegisterFormDataTypes";
import { Button } from "@nextui-org/button";
import { useMutation } from "react-query";
import * as apiClient from "../client/api-client";
import { useNavigate } from "react-router-dom";
import { ToastMessageType } from '../types/ToastMessageType'
import ToastProvider from "../Components/ToastProvider";

const Register = () => {
    const navigate = useNavigate();
    const { register, handleSubmit, formState: { errors }, watch } = useForm<RegisterFormDataType>();
    const [toast, setToast] = useState<ToastMessageType | null>(null);
    const [isVisible, setIsVisible] = useState(false);
    const [isConfirmVisible, setIsConfirmVisible] = useState(false);

    const toggleVisibility = () => setIsVisible(!isVisible);
    const toggleConfirmVisibility = () => setIsConfirmVisible(!isConfirmVisible);

    const mutation = useMutation(apiClient.register, {
        onSuccess: () => {
            setToast({
                message: 'Registration Successfull',
                type: 'success' as Extract<ToastMessageType, { type: "success" }>
            })
            navigate('/');
        },
        onError: (error: Error) => {
            setToast({
                message: error.message,
                type: 'error' as Extract<ToastMessageType, { type: "error" }>
            })
        }
    },)

    const onRegisterSubmit = handleSubmit((data) => {
        mutation.mutate(data)
    })

    return (
        <div className="flex flex-col gap-5" onSubmit={onRegisterSubmit}>
            <form className="flex flex-col gap-5 max-w-xl w-full mx-auto">
                <h2 className="text-3xl font-bold mb-4">Create an account</h2>

                <div className="w-full">
                    <Input
                        isRequired
                        type="text"
                        label="First Name"
                        isInvalid={errors.firstName && true}
                        errorMessage={errors.firstName && errors.firstName.message}
                        {...register('firstName', { required: 'Please enter your first name to proceed' })}
                    />
                </div>
                <div className="w-full">
                    <Input
                        isRequired
                        type="text"
                        label="Last Name"
                        isInvalid={errors.lastName && true}
                        errorMessage={errors.lastName && errors.lastName.message}
                        {...register('lastName', { required: 'Please enter your last name to proceed' })}
                    />
                </div>
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
                        type="phone"
                        label="Phone"
                        isInvalid={errors.phone && true}
                        errorMessage={errors.phone && errors.phone.message}
                        {...register('phone', {
                            required: 'Please enter your phone number to proceed',
                            minLength: {
                                value: 10,
                                message: 'Phone number should be at least 10 characters long.'
                            }
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
                <div className="w-full">
                    <Input
                        isRequired
                        label="Confirm Password"
                        type={isVisible ? "text" : "password"}
                        isInvalid={errors.confirmPassword && true}
                        errorMessage={errors.confirmPassword && errors.confirmPassword.message}
                        endContent={
                            <button className="focus:outline-none" type="button" onClick={toggleConfirmVisibility} aria-label="toggle password visibility">
                                {isConfirmVisible ? (
                                    <EyeIcon className="text-2xl text-default-400 pointer-events-none" />
                                ) : (
                                    <EyeOffIcon className="text-2xl text-default-400 pointer-events-none" />
                                )}
                            </button>
                        }
                        {...register('confirmPassword', {
                            validate: (val) => {
                                if (!val) {
                                    return 'Please confirm your password to proceed.'
                                }
                                else if (watch('password') !== val) {
                                    return 'Passwords do not match. Please try again.'
                                }
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

                <div className="flex justify-center">
                    <Button radius="full" type="submit" variant="solid" color="primary">
                        Submit
                    </Button>
                </div>
            </form>
        </div>
    )
}

export default Register