import { ReactNode } from 'react';
import styles from './Modal.module.scss';

interface Props {
    children: ReactNode;
    isOpen: boolean;
    onClose: () => void;
}

// reusable modal window
const Modal: React.FC<Props> = ({ isOpen, children, onClose }) => {
    return (
        <div
            className={`${styles.modal} ${isOpen && styles.open}`}
            onClick={onClose}
        >
            <div className={`${styles.content} ${isOpen && styles.open}`}>
                {children}
            </div>
        </div>
    );
};

export default Modal;
