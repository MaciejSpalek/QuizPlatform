import { ChangeEvent, RefObject } from "react";

export interface IInput {
    id?: string;
    _ref?: RefObject<HTMLInputElement>;
    type: string;
    name?: string;
    maxLength?: number;
    ariaLabel?: string;
    placeholder?: string;
    isRequired?: boolean;
    ariaInvalid?: boolean;
    defaultValue?: string | number;
    value?: string | number;
    ariaDescribedBy?: string;
    onBlur?: (e: ChangeEvent<HTMLInputElement>) => void;
    onChange?:  (e: ChangeEvent<HTMLInputElement>) => void;
};