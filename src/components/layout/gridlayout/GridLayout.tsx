import React, { useContext } from 'react';

import { StyledGridLayout } from './GridLayout.styled';
import { Grid } from '../../grid/Grid';
import { Rover } from '../../rover/Rover';
import * as constants from '../../../constants';
import { AppContext } from '../../../store/Store';

export interface IGridLayoutProps {
	className?: string;
}

export const GridLayout: React.FC<IGridLayoutProps> = React.memo(
	({ className }: IGridLayoutProps) => {
		const {
			state: { rover },
		} = useContext(AppContext);

		return (
			<StyledGridLayout
				className={`GridLayout ${className}`}
				data-testid="test-GridLayout"
			>
				<div className="GridLayout-content">
					<div className="GridLayout-rover">
						<Rover
							direction={rover.direction}
							position={rover.position}
						/>
					</div>
					<div className="GridLayout-grid">
						<Grid size={constants.GRID_SIZE} />
					</div>
				</div>
			</StyledGridLayout>
		);
	},
);
