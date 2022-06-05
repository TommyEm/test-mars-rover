import React from 'react';

import { StyledTitle } from './Title.styled';

export interface ITitleProps {
	className?: string;
	children: React.ReactNode;
	testId?: string;
}

export const Title: React.FC<ITitleProps> = ({
	className,
	children,
	testId = 'test-Title',
}: ITitleProps) => {
	return (
		<StyledTitle
			className={`Title ${className}`}
			data-testid={testId}
		>
			{children}
		</StyledTitle>
	);
};
