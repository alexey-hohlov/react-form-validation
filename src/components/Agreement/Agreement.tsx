import styles from './Agreement.module.scss';

interface Props {
    setAgreement: (value: boolean) => void;
}

const Agreement: React.FC<Props> = ({ setAgreement }) => {
    // onClick event on labels we need because of custom checkmarks

    return (
        <div className={styles.agreement}>
            Do you agree to submit your infos?
            <div className={styles.radio}>
                <label
                    onClick={() => {
                        setAgreement(false);
                    }}
                >
                    No
                    <input
                        type='radio'
                        name='agreement'
                        defaultChecked={true}
                    />
                    <span className={styles.checkmark}></span>
                </label>
                <label
                    onClick={() => {
                        setAgreement(true);
                    }}
                >
                    Yes
                    <input type='radio' name='agreement' />
                    <span className={styles.checkmark}></span>
                </label>
            </div>
        </div>
    );
};

export default Agreement;
