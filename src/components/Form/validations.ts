//validation rules for form fields

const defaultMessage = 'This field is required';

export const validations = {
    name: {
        required: defaultMessage,
    },
    surname: {
        required: defaultMessage,
    },
    birthDate: {
        required: defaultMessage,
    },
    sex: {
        required: defaultMessage,
    },
    phone: {
        required: defaultMessage,
        minLength: 18,
    },
    email: {
        pattern: {
            value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
            message: 'Invalid e-mail address',
        },
    },
};
