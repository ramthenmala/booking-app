import { RegisterFormDataType } from "../types/RegisterFormDataTypes";

const API_BASE_URL = import.meta.env.VITE_API_BAE_URL || '';

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

export const signIn = async (formData: Pick<RegisterFormDataType, 'email' | 'password'>) => {
    const response = await fetch(`${API_BASE_URL}/api/auth/login`, {
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

export const signOut = async () => {
    const response = await fetch(`${API_BASE_URL}/api/auth/logout`, {
        method: 'POST',
        credentials: 'include',
        headers: {
            'Content-type': 'application/json'
        },
    });

    if (!response.ok) {
        throw new Error('Error During Sign out')
    }
}

export const validateToken = async () => {
    const response = await fetch(`${API_BASE_URL}/api/auth/validate-token`, {
        credentials: 'include',
        method: 'GET'
    });

    if (!response.ok) {
        throw new Error('Token Invalid')
    }

    return response.json();
}