import { useEffect } from 'react';
import { ToastMessage } from '../../types/ToastMessageType'

const Toast = (props: ToastMessage) => {
    const { message, type, onClose } = props;

    const styles = type === 'SUCCESS' ? 'bg-green-600' : 'bg-red-600';

    useEffect(() => {
        const timer = setTimeout(() => {
            onClose()
        }, 5000);

        return () => {
            clearTimeout(timer)
        }
    }, [onClose])

    return (
        <div className={`fixed top-4 right-4 z-50 p-4 rounded-md ${styles} text-white max-wd`}>
            <div className='flex justify-center items-center'>
                <span className='text-lg font-bold'>{message}</span>
            </div>
        </div>
    )
}

export default Toast;