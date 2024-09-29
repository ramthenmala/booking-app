export type ToastMessageType = {
    message: string;
    type: 'SUCCESS' | 'ERROR';
    onClose?: () => void
}