import { InputHTMLAttributes } from 'react';


export interface TextFieldProps
  extends InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    error?: boolean;
}