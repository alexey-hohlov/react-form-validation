import { IData } from "./formTypes";

export interface IForm {
    popup: boolean;
    agreement: boolean;
    data: IData;
}