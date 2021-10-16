import React, { MouseEventHandler } from 'react';
declare type ButtonProps = {
    onClick?: MouseEventHandler<HTMLButtonElement>;
    backgroundColor?: string;
};
declare const Button: React.FC<ButtonProps>;
export default Button;
