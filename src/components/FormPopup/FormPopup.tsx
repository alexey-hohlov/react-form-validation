import styles from './FormPopup.module.scss';
import { useAppSelector, useAppDispatch } from '../../hooks/reduxHooks';
import { formSlice } from '../../store/reducers/formReducer';
import { Button, Modal } from '../';

const FormPopup: React.FC = () => {
    const { popup, data } = useAppSelector(state => state.formReducer);
    const { setPopup } = formSlice.actions;
    const dispatch = useAppDispatch();

    const handleClose = () => {
        dispatch(setPopup(false));
    };

    return (
        <Modal onClose={handleClose} isOpen={popup}>
            <div className={styles.wrapper}>
                <div className={styles.text}>
                    Thank you <span>{`${data.name} ${data.surname}`}</span> for
                    submitting the form
                </div>
                <Button title='My pleasure' color={'blue'} onClick={() => {}} />
            </div>
        </Modal>
    );
};

export default FormPopup;
