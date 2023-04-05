import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { IForm } from '../../types/storeTypes';
import { IData } from '../../types/formTypes';

const initialState: IForm = {
    popup: false,
    agreement: false,
    data: {
        name: '',
        surname: '',
        birthDate: '',
        sex: '',
        email: '',
        address: '',
    },
};

export const formSlice = createSlice({
    name: 'form',
    initialState,
    reducers: {
        setPopup(state, action: PayloadAction<boolean>) {
            state.popup = action.payload;
        },
        setAgreement(state, action: PayloadAction<boolean>) {
            state.agreement = action.payload;
        },
        setData(state, action: PayloadAction<IData>) {
            state.data = action.payload;
        },
    },
});

export default formSlice.reducer;
