import { useAppDispatch } from '../../hooks/reduxHooks';
import styles from './Agreement.module.scss';
import { formSlice } from '../../store/reducers/formReducer';

const Agreement: React.FC = () => {
    // onClick event on labels we need because of custom checkmarks
    // stopPropagation() on inputs need to disable double check on labels
    const { setAgreement } = formSlice.actions;
    const dispatch = useAppDispatch();

    return (
        <div className={styles.agreement}>
            Do you agree to submit your infos?
            <div className={styles.radio}>
                <label
                    onClick={() => {
                        dispatch(setAgreement(false));
                        console.log('fired no!');
                    }}
                >
                    No
                    <input
                        type='radio'
                        name='agreement'
                        defaultChecked={true}
                        onClick={e => {
                            e.stopPropagation();
                        }}
                    />
                    <span className={styles.checkmark}></span>
                </label>
                <label
                    onClick={() => {
                        dispatch(setAgreement(true));
                    }}
                >
                    Yes
                    <input
                        type='radio'
                        name='agreement'
                        onClick={e => {
                            e.stopPropagation();
                        }}
                    />
                    <span className={styles.checkmark}></span>
                </label>
            </div>
        </div>
    );
};

export default Agreement;
