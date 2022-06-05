import React from 'react';

import { StyledLabel } from './Label.styled';

export interface ILabelProps {
	className?: string;
	children: React.ReactNode;
	forHtml: string;
}

export const Label: React.FC<ILabelProps> = ({
	className,
	children,
	forHtml,
}: ILabelProps) => {
	return (
		<StyledLabel
			className={`Label ${className}`}
			forHtml={forHtml}
			data-testid="test-Label"
		>
			{children}
		</StyledLabel>
	);
};
