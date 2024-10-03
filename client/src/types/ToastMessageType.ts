export interface ToastMessageType {
    type: "success" | "error" | "info" | "warning";
    message: string;
    onClose?: () => void;
}