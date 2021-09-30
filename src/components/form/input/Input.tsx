import React from 'react';

import { StyledInput } from './Input.styled';


export interface IInputProps {
	className?: string;
	name: string;
	value?: string;
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Input: React.FC<IInputProps> = ({
	className,
	name,
	value,
	onChange,
}: IInputProps) => {
    return (
		<StyledInput
			id={name}
			className={`Input ${className}`}
			name={name}
			type='text'
			value={value}
			onChange={onChange}
			data-testid='test-Input'
		/>
	);
}
