import { useController, useFormContext } from 'react-hook-form';
import { withHookFormMask } from 'use-mask-input';
import styles from './PhoneInput.module.scss';

interface Props {
    label: string;
    name: string;
    validations: any;
}

const PhoneInput: React.FC<Props> = ({ label, name, validations }) => {
    // we need FormContext here to link UseMaskInput with React Form
    const { register } = useFormContext();

    const {
        fieldState: { error },
    } = useController({ name, rules: validations });

    return (
        <label>
            {label}
            <input
                type='text'
                {...withHookFormMask(register(name, validations), [
                    '+7 (999) 999-99-99',
                ])}
            />
            {error && <span>{error.message}</span>}
        </label>
    );
};

export default PhoneInput;
