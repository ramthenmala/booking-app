import { useState } from "react";
import { useMutation, useQueryClient } from "react-query";
import * as apiClient from "../../client/api-client";
import { useNavigate } from "react-router-dom";
import { ToastMessageType } from '../../types/ToastMessageType'
import ToastProvider from "../../Components/ToastProvider";

const SignOut = () => {
    const navigate = useNavigate();
    const [toast, setToast] = useState<ToastMessageType | null>(null);
    const queryClient = useQueryClient();

    const mutation = useMutation(apiClient.signOut, {
        onSuccess: async () => {
            await queryClient.invalidateQueries('validateToken')
            setToast({
                message: 'Signed out Successfull',
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
    },);

    const onLogout = () => {
        mutation.mutate()
    }

    return (
        <>
            <button onClick={onLogout} className='text-white px-3 font-bold hover:text-gray-300'>Signout</button>
            {
                toast && (
                    <ToastProvider
                        message={toast.message}
                        type={toast.type}
                        onClose={() => setToast(null)}
                    />
                )

            }
        </>
    )
}

export default SignOut