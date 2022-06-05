import React from 'react';
import classNames from 'classnames';

import { StyledButton } from './Button.styled';

export interface IButtonProps {
	className?: string;
	children: React.ReactNode;
	isActive?: boolean;
	onClick: () => void;
}

export const Button: React.FC<IButtonProps> = ({
	className,
	children,
	isActive = false,
	onClick,
}: IButtonProps) => {
	const cx = classNames('Button', className, {
		'mod-active': isActive,
	});

	return (
		<StyledButton
			className={cx}
			onClick={onClick}
			data-testid="test-Button"
		>
			{children}
		</StyledButton>
	);
};
