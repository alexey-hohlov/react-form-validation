export interface IData {
    name: string;
    surname: string;
    birthDate: string;
    sex: string;
    email: string;
    address: string;
}

export interface IValidation {
    required?: string;
    minLength?: number;
    pattern?: {
        value: RegExp;
        message: string;
    };
}
