import { InputHTMLAttributes } from 'react';


export interface SliderProps
  extends InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    error?: boolean;
}