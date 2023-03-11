import styles from './Agreement.module.scss';

interface Props {
    setAgreement: (value: boolean) => void;
}

const Agreement: React.FC<Props> = ({ setAgreement }) => {
    const handleRadio = (e: React.ChangeEvent<HTMLInputElement>) => {
        switch (e.target.value) {
            case 'no':
                setAgreement(false);
                break;
            case 'yes':
                setAgreement(true);
                break;
            default:
                break;
        }
    };

    return (
        <div className={styles.agreement}>
            Do you agree to submit your infos?
            <div className={styles.radio} onChange={handleRadio}>
                <label>
                    No
                    <input
                        type='radio'
                        name='agreement'
                        value={'no'}
                        defaultChecked={true}
                    />
                    <span className={styles.checkmark}></span>
                </label>
                <label>
                    Yes
                    <input type='radio' name='agreement' value={'yes'} />
                    <span className={styles.checkmark}></span>
                </label>
            </div>
        </div>
    );
};

export default Agreement;
