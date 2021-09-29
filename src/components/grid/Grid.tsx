import React from 'react';

import { StyledGrid } from './Grid.styled';


export interface IGridProps {
	className?: string;
}

export const Grid: React.FC<IGridProps> = ({
	className,
}: IGridProps) => {
    return (
		<StyledGrid
			className={`Grid ${className}`}
			data-testid='test-Grid'
		>

		</StyledGrid>
	);
}
