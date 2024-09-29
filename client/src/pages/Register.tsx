import { Input } from "@nextui-org/input";
import { useForm } from "react-hook-form";
import { RegisterFormData } from "../types/RegisterFormData";
import { Button } from "@nextui-org/button";
import { useMutation } from "react-query";
import * as apiClient from "../client/api-client";

const Register = () => {
    const { register, handleSubmit, formState: { errors }, watch } = useForm<RegisterFormData>();

    const mutation = useMutation(apiClient.register, {
        onSuccess: () => { 
            console.log('Registration Successfull')
        },
        onError: (error: Error) => { 
            console.log(error.message)
        }
    }, )

    const onRegisterSubmit = handleSubmit((data) => {
        console.log(data);
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
                        {...register('phone', { required: 'Please enter your phone number to proceed' })}
                    />
                </div>
                <div className="w-full">
                    <Input
                        isRequired
                        isClearable
                        type="password"
                        label="Password"
                        isInvalid={errors.password && true}
                        errorMessage={errors.password && errors.password.message}
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
                        isClearable
                        type="password"
                        label="Confirm Password"
                        isInvalid={errors.confirmPassword && true}
                        errorMessage={errors.confirmPassword && errors.confirmPassword.message}
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