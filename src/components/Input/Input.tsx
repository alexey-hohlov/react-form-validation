import { useController } from 'react-hook-form';
import { IValidation } from '../../types/formTypes';
import styles from './Input.module.scss';

interface Props {
    label: string;
    name: string;
    validations?: IValidation;
    type: string;
    required: boolean;
}

const Input: React.FC<Props> = ({
    name,
    label,
    validations,
    type,
    required,
}) => {
    const {
        field,
        fieldState: { error },
    } = useController({ name, rules: validations });

    return (
        <label className={styles.wrapper}>
            <div className={styles.header}>
                {label}
                {required && <span>*</span>}
            </div>
            <input
                className={`${styles.input} ${error && styles.error}`}
                type={type}
                {...field}
            />
            <span>{error && error.message}</span>
        </label>
    );
};

export default Input;
