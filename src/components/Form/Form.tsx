import { useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { Agreement, Button, Input, PhoneInput, Select } from '../../components';
import { IData } from '../../types/formTypes';
import styles from './Form.module.scss';
import { validations } from './validations';
import { defaultValues } from './defaultValues';

const Form: React.FC = () => {
    // options for sex select field
    const sex = ['male', 'female'];

    // state for user agreement
    const [agreement, setAgreement] = useState(false);

    const methods = useForm<IData>({ mode: 'onChange', defaultValues });

    const onSubmit = methods.handleSubmit(data => {
        agreement
            ? console.log(data)
            : alert('To continue you should agree to submit your info');
    });

    return (
        <FormProvider {...methods}>
            <form className={styles.form} onSubmit={onSubmit}>
                <h2>Welcome to our website!</h2>
                <Input
                    label={'Name'}
                    name={'name'}
                    type={'text'}
                    validations={validations.name}
                />
                <Input
                    label={'Surname'}
                    name={'surname'}
                    type={'text'}
                    validations={validations.surname}
                />
                <Input
                    label={'Birth Date'}
                    name={'birthDate'}
                    type={'date'}
                    validations={validations.birthDate}
                />
                <Select
                    label={'Sex'}
                    name={'sex'}
                    options={sex}
                    placeholder={''}
                    validations={validations.sex}
                />
                <PhoneInput
                    label={'Phone number'}
                    name={'phone'}
                    validations={validations.phone}
                />
                <Input
                    label={'Email'}
                    name={'email'}
                    type={'text'}
                    validations={validations.email}
                />
                <Input
                    label={'Address'}
                    name={'address'}
                    type={'text'}
                />
                <Agreement setAgreement={setAgreement} />
                <Button
                    title={'Submit'}
                    isDisabled={!methods.formState.isValid}
                />
                <Button title={'Reset'} />
            </form>
        </FormProvider>
    );
};

export default Form;
