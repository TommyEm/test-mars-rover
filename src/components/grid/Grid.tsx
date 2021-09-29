import React from 'react';
import { GRID_SIZE } from '../../constants';

import { StyledGrid } from './Grid.styled';


export interface IGridProps {
	className?: string;
	size: number;
}

export const Grid: React.FC<IGridProps> = ({
	className,
	size = GRID_SIZE,
}: IGridProps) => {
	let cells = [];

	for (let i = 1; i <= (size * size); i++) {
		cells.push(<div className='Grid-cell'></div>);
	}

	return (
		<StyledGrid
			className={`Grid ${className}`}
			size={GRID_SIZE}
			data-testid='test-Grid'
		>
			{cells}
		</StyledGrid>
	);
}
