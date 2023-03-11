import { useController } from 'react-hook-form';
import styles from './Select.module.scss';

interface Props {
    label: string;
    name: string;
    validations?: any;
    options: Array<string>;
    placeholder: string | number;
}

const Select: React.FC<Props> = ({
    label,
    name,
    validations,
    options,
    placeholder,
}) => {
    const {
        field,
        fieldState: { error },
    } = useController({ name, rules: validations });

    return (
        <label className={styles.wrapper}>
            {label}
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
        </label>
    );
};

export default Select;
