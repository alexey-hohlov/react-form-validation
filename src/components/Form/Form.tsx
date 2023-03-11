import { useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { Agreement, Button, Input, Select } from '../../components';
import { IData } from '../../types/formTypes';
import styles from './Form.module.scss';
import { validations } from './validations';

const Form: React.FC = () => {
    // options for sex select field
    const sex = ['male', 'female'];

    // state for user agreement
    const [agreement, setAgreement] = useState(false);

    const methods = useForm<IData>({ mode: 'onChange' });

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
                    defaultValue={''}
                    validations={validations.name}
                />
                <Input
                    label={'Surname'}
                    name={'surname'}
                    type={'text'}
                    defaultValue={''}
                    validations={validations.surname}
                />
                <Input
                    label={'Birth Date'}
                    name={'birthDate'}
                    type={'date'}
                    defaultValue={''}
                    validations={validations.birthDate}
                />
                <Select
                    label={'Sex'}
                    name={'sex'}
                    options={sex}
                    placeholder={''}
                    validations={validations.sex}
                />
                <Input
                    label={'Email'}
                    name={'email'}
                    type={'text'}
                    defaultValue={''}
                    validations={validations.email}
                />
                <Input
                    label={'Address'}
                    name={'address'}
                    type={'text'}
                    defaultValue={''}
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
