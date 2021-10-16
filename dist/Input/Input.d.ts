import React, { ChangeEventHandler } from 'react';
declare type InputProps = {
    value?: string;
    onChange?: ChangeEventHandler<HTMLInputElement>;
};
declare const Input: React.FC<InputProps>;
export default Input;
