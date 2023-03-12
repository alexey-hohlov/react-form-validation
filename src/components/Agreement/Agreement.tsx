import styles from './Agreement.module.scss';

interface Props {
    setAgreement: (value: boolean) => void;
}

const Agreement: React.FC<Props> = ({ setAgreement }) => {
    return (
        <div className={styles.agreement}>
            Do you agree to submit your infos?
            <div className={styles.radio}>
                <label>
                    No
                    <input
                        type='radio'
                        name='agreement'
                        defaultChecked={true}
                    />
                    <span
                        className={styles.checkmark}
                        onClick={() => {
                            setAgreement(false);
                        }}
                    ></span>
                </label>
                <label>
                    Yes
                    <input type='radio' name='agreement' />
                    <span
                        className={styles.checkmark}
                        onClick={() => {
                            setAgreement(true);
                        }}
                    ></span>
                </label>
            </div>
        </div>
    );
};

export default Agreement;
