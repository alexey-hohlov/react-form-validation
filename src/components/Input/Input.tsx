import { useController } from 'react-hook-form';
import styles from './Input.module.scss';

interface Props {
    label: string;
    name: string;
    validations?: any;
    defaultValue: string | number;
    type: string;
}

const Input: React.FC<Props> = ({
    name,
    label,
    validations,
    defaultValue,
    type,
}) => {
    const {
        field,
        fieldState: { error },
    } = useController({ name, rules: validations, defaultValue });

    return (
        <label className={styles.wrapper}>
            {label}
            <input
                className={`${styles.input} ${error && styles.error}`}
                type={type}
                {...field}
            />
            {error && <span>{error.message}</span>}
        </label>
    );
};

export default Input;
