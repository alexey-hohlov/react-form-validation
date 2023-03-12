import { useController } from 'react-hook-form';
import { IValidation } from '../../types/formTypes';
import styles from './Select.module.scss';

interface Props {
    label: string;
    name: string;
    validations?: IValidation;
    options: Array<string>;
    placeholder: string | number;
    required: boolean;
}

const Select: React.FC<Props> = ({
    label,
    name,
    validations,
    options,
    placeholder,
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
            <select className={styles.select} {...field}>
                <option className={styles.placeholder}>{placeholder}</option>
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
            <span></span>
        </label>
    );
};

export default Select;
