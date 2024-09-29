import { ToastMessage } from "./ToastMessageType"

export type AppContextTypes = {
    showToast: (toastMessage: ToastMessage) => void
}