import React from 'react';

import { StyledButton } from './Button.styled';


export interface IButtonProps {
	className?: string;
	children: React.ReactNode;
	onClick: () => void;
}

export const Button: React.FC<IButtonProps> = ({
	className,
	children,
	onClick,
}: IButtonProps) => {
    return (
		<StyledButton
			className={`Button ${className}`}
			onClick={onClick}
			data-testid='test-Button'
		>
			{children}
		</StyledButton>
	);
}
