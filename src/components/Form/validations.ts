//validation rules for form fields

export const validations = {
    name: {
        required: 'This field is required',
    },
    surname: {
        required: 'This field is required',
    },
    birthDate: {
        required: 'This field is required',
    },
    sex: {
        required: 'This field is required',
    },
    email: {
        pattern: {
            value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
            message: 'Invalid e-mail address',
        },
    },
};
