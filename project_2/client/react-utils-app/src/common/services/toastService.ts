import { toast } from 'react-toastify';

class Toast{
    static success(message: string) {
        toast.success(message);
    }

    static error(message: string) {
        toast.error(message);
    }

    static info(message: string) {
        toast.info(message);
    }
}

export default Toast;
