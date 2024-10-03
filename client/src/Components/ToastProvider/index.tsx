import React, { useEffect, useCallback } from 'react';
import { ToastMessageType } from '../../types/ToastMessageType';

const ToastProvider: React.FC<ToastMessageType> = ({ message, type, onClose }) => {
    const typeStyles = {
        success: 'bg-green-600',
        error: 'bg-red-600',
        info: 'bg-blue-600',
        warning: 'bg-yellow-600',
    };

    const styles = typeStyles[type] || 'bg-gray-600';

    const handleClose = useCallback(() => {
        if (onClose) {
            onClose();
        }
    }, [onClose]);

    useEffect(() => {
        const timer = setTimeout(handleClose, 5000);

        return () => clearTimeout(timer);
    }, [handleClose]);

    return (
        <div className={`fixed top-4 right-4 z-50 p-4 rounded-md ${styles} text-white`}>
            <div className='flex justify-center items-center'>
                <span className='text-lg font-bold'>{message}</span>
            </div>
        </div>
    );
};

export default ToastProvider;