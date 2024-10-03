import React, { createContext, useContext, useState } from "react";
import { useQuery } from "react-query";
import * as apiClient from "../client/api-client";
import { AppContextTypes } from "../types/AppContextTypes";

const AppContext = createContext<AppContextTypes | undefined>(undefined);

export const AppContextProvider = ({ children }: { children: React.ReactNode }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    
    const { isError, isLoading } = useQuery('validateToken', apiClient.validateToken, {
        retry: false,
        onSuccess: () => {
            setIsLoggedIn(true); 
        },
        onError: () => {
            setIsLoggedIn(false);
        }
    });

    const contextValue: AppContextTypes = {
        isLoggedIn,
        isLoading,
    };

    return (
        <AppContext.Provider value={contextValue}>
            {children}
        </AppContext.Provider>
    );
};

export const useAppContext = () => {
    const context = useContext(AppContext);
    if (!context) {
        throw new Error("useAppContext must be used within an AppContextProvider");
    }
    return context;
};
