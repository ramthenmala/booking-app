import React, { useContext, useState } from "react";
import { ToastMessageType } from "../types/ToastMessageType";
import Toast from "../Components/Toast";
import { AppContextTypes } from "../types/AppContextTypes";

const AppContext = React.createContext<AppContextTypes | undefined>(undefined);

export const AppContextProvider = ({ children }: { children: React.ReactNode }) => {

    const [toast, setToast] = useState<ToastMessageType | undefined>(undefined)

    return (
        <AppContext.Provider value={{
            showToast: (toastMessage) => {
                setToast(toastMessage)
            }
        }}>
            {toast && (<Toast type={toast.type} message={toast.message} onClose={() => setToast(undefined)} />)}
            {children}
        </AppContext.Provider>
    )
}

export const useAppContext = () => {
    const context = useContext(AppContext)
    return context as AppContextTypes;
}