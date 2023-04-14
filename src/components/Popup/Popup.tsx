import { IData } from '../../types/formTypes';
import Button from '../common/Button/Button';
import styles from './Popup.module.scss';

interface Props {
    isOpen: boolean;
    onClose: () => void;
    data: IData;
}

const Popup: React.FC<Props> = ({ isOpen, onClose, data }) => {
    return (
        <div
            className={`${styles.popup} ${isOpen && styles.open}`}
            onClick={onClose}
        >
            <div className={`${styles.content} ${isOpen && styles.open}`}>
                <div className={styles.text}>
                    Thank you <span>{`${data.name} ${data.surname}`}</span> for
                    submitting the form
                </div>
                <Button title='My pleasure' color={'blue'} onClick={() => {}} />
            </div>
        </div>
    );
};

export default Popup;
