import { FormProvider, useForm } from 'react-hook-form';
import {
    Agreement,
    Button,
    Input,
    PhoneInput,
    Popup,
    Select,
} from '../../components';
import { IData } from '../../types/formTypes';
import styles from './Form.module.scss';
import { validations } from './validations';
import { defaultValues } from './defaultValues';
import { useAppDispatch, useAppSelector } from '../../hooks/reduxHooks';
import { formSlice } from '../../store/reducers/formReducer';

const Form: React.FC = () => {
    // redux states and actions
    const dispatch = useAppDispatch();
    const { agreement, popup, data } = useAppSelector(state => state.formReducer);
    const { setPopup, setAgreement, setData } = formSlice.actions;

    // options for sex select field
    const sex = ['male', 'female'];

    const methods = useForm<IData>({ mode: 'all', defaultValues });

    //handlers for submit, reset, and popup close
    const onSubmit = methods.handleSubmit(data => {
        switch (agreement) {
            case true:
                dispatch(setData(data))
                dispatch(setPopup(true));
                break;
            case false:
                alert('To continue you should agree to submit your info');
                break;
            default:
                break;
        }
    });

    const onClose = () => {
        handleReset();
        dispatch(setPopup(false));
    };

    const handleReset = () => {
        methods.reset();
        dispatch(setAgreement(false));
    };

    return (
        <FormProvider {...methods}>
            <form className={styles.form} onSubmit={onSubmit}>
                <h1>React Form Validation</h1>
                <div className={styles.inputs}>
                    <Input
                        label={'Name'}
                        name={'name'}
                        type={'text'}
                        validations={validations.name}
                        required={true}
                    />
                    <Input
                        label={'Surname'}
                        name={'surname'}
                        type={'text'}
                        validations={validations.surname}
                        required={true}
                    />
                    <Input
                        label={'Birth Date'}
                        name={'birthDate'}
                        type={'date'}
                        validations={validations.birthDate}
                        required={true}
                    />
                    <Select
                        label={'Sex'}
                        name={'sex'}
                        options={sex}
                        validations={validations.sex}
                        required={true}
                    />
                    <PhoneInput
                        label={'Phone number'}
                        name={'phone'}
                        validations={validations.phone}
                        required={true}
                    />
                    <Input
                        label={'Email'}
                        name={'email'}
                        type={'text'}
                        validations={validations.email}
                        required={false}
                    />
                    <Input
                        label={'Address'}
                        name={'address'}
                        type={'text'}
                        required={false}
                    />
                    <Agreement />
                </div>
                <div className={styles.buttons}>
                    <Button
                        title={'Submit'}
                        isDisabled={!methods.formState.isValid}
                        onClick={onSubmit}
                        color={'blue'}
                    />
                    <Button
                        title={'Reset'}
                        onClick={handleReset}
                        color={'pink'}
                    />
                </div>
            </form>
            <Popup isOpen={popup} onClose={onClose} data={data} />
        </FormProvider>
    );
};

export default Form;
