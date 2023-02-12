//React
import React from 'react';

//React-hook
import { SyntheticEvent, useState, FC } from 'react';

import style from './input.module.css';

interface IInputInterface {
	types?: 'text' | 'email' | 'password';
	placeholder?: string;
	value?: string;
	name?: string;
	success?: boolean;
	error?: boolean;
	disabled?: boolean;
	onChange?(e?: React.ChangeEvent<HTMLInputElement>): void;
	onBlur?(e?: React.FocusEvent<HTMLInputElement>): void;
	onFocus?(e?: React.FocusEvent<HTMLInputElement>): void;
}

export const Input: FC<IInputInterface> = ({ types, placeholder }) => {
	return (
		<input type={types} placeholder={placeholder} />
	)
}
