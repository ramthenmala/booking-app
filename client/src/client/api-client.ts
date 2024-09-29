import { RegisterFormDataType } from "../types/RegisterFormDataTypes";

const API_BASE_URL = import.meta.env.VITE_API_BAE_URL;

export const register = async (formData: RegisterFormDataType) => {
    const response = await fetch(`${API_BASE_URL}/api/users/register`, {
        method: 'POST',
        credentials: 'include',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(formData)
    });

    const responseBody = await response.json();

    if (!response.ok) {
        throw new Error(responseBody.message)
    }
}