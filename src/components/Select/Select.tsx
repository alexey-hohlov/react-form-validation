import { useController } from 'react-hook-form';
import { IValidation } from '../../types/formTypes';
import styles from './Select.module.scss';

interface Props {
    label: string;
    name: string;
    validations?: IValidation;
    options: Array<string>;
    required: boolean;
}

const Select: React.FC<Props> = ({
    label,
    name,
    validations,
    options,
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
            <select
                className={`${styles.select} ${error && styles.error}`}
                {...field}
            >
                <option className={styles.placeholder}></option>
                {options.map((option, index) => (
                    <option
                        className={styles.option}
                        value={option}
                        key={index}
                    >
                        {option}
                    </option>
                ))}
            </select>
            <span>{error && error.message}</span>
        </label>
    );
};

export default Select;
