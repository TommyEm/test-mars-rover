import React, { useContext, useEffect } from 'react';

import { StyledGridLayout } from './GridLayout.styled';
import { Grid } from '../../grid/Grid';
import { Rover } from '../../rover/Rover';
import * as constants from '../../../constants';
import { AppContext } from '../../../store/Store';
import { moveRover } from '../../lib/moveRover';
import { RoverCommands } from '../../../types/rover';
import * as actions from '../../../store/actionTypes';


export interface IGridLayoutProps {
	className?: string;
	commands: string;
}

export const GridLayout: React.FC<IGridLayoutProps> = React.memo(({
	className,
}: IGridLayoutProps) => {
	const { state: { commands, rover }, dispatch } = useContext(AppContext);

	useEffect(() => {
		const { newDir, newPos } = moveRover(commands.slice(-1) as RoverCommands, rover.direction, rover.position);
		dispatch({ type: actions.UPDATE_ROVER_DIRECTION, payload: newDir });
		dispatch({ type: actions.UPDATE_ROVER_POSITION, payload: newPos });
		console.log(rover);

	}, [commands, dispatch, rover]);

	return (
		<StyledGridLayout
			className={`GridLayout ${className}`}
			data-testid='test-GridLayout'
		>
			<Rover
				direction={rover.direction}
				position={rover.position}
			/>
			<Grid size={constants.GRID_SIZE} />
		</StyledGridLayout>
	);
});
