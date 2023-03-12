import { useController, useFormContext } from 'react-hook-form';
import { withHookFormMask } from 'use-mask-input';
import { IValidation } from '../../types/formTypes';
import styles from './PhoneInput.module.scss';

interface Props {
    label: string;
    name: string;
    validations: IValidation;
    required: boolean;
}

const PhoneInput: React.FC<Props> = ({
    label,
    name,
    validations,
    required,
}) => {
    // we need FormContext here to link UseMaskInput with React Form
    const { register } = useFormContext();

    const {
        fieldState: { error },
    } = useController({ name, rules: validations });

    return (
        <label className={styles.wrapper}>
            <div className={styles.header}>
                <div className={styles.header}>
                    {label}
                    {required && <span>*</span>}
                </div>
            </div>
            <input
                className={`${styles.input} ${error && styles.error}`}
                type='text'
                {...withHookFormMask(register(name, validations), [
                    '+7 (999) 999-99-99',
                ])}
            />
            <span>{error && error.message}</span>
        </label>
    );
};

export default PhoneInput;
