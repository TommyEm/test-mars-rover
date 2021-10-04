import React, { useCallback, useContext } from 'react';
import { COMMAND_LIST } from '../../../constants';
import { AppContext } from '../../../store/Store';
import * as actions from '../../../store/actionTypes';

import { StyledCommandsLayout } from './CommandsLayout.styled';
import { Label } from '../../form/label/Label';
import { Input } from '../../form/input/Input';
import { Button } from '../../button/Button';
import { moveRover } from '../../../lib/moveRover';
import { RoverCommands } from '../../../types/rover';


export interface ICommandsLayoutProps {
	className?: string;
}

export const CommandsLayout: React.FC<ICommandsLayoutProps> = ({
	className,
}: ICommandsLayoutProps) => {
	const { state: { commands, rover }, dispatch } = useContext(AppContext);

	const handleChangeInput = useCallback((command) => {
		if (COMMAND_LIST.includes(command.slice(-1))) { // The last key input is in the command list
			// Update the input
			dispatch({ type: actions.UPDATE_COMMANDS, payload: command });

			// Move the Rover
			const { newDir, newPos } = moveRover(command.slice(-1) as RoverCommands, rover.direction, rover.position);
			dispatch({ type: actions.UPDATE_ROVER_DIRECTION, payload: newDir });
			dispatch({ type: actions.UPDATE_ROVER_POSITION, payload: newPos });
		}
	}, [dispatch, rover.direction, rover.position]);

	const handleResetInput = useCallback(() => {
		dispatch({ type: actions.RESET });
	}, [dispatch]);

    return (
		<StyledCommandsLayout
			className={`CommandsLayout ${className}`}
			data-testid='test-CommandsLayout'
		>
			<Label forHtml='commands'>Enter some commands:</Label>
			<div className='CommandsLayout-input'>
				<Input
					name='commands'
					value={commands}
					onChange={e => handleChangeInput(e.currentTarget.value)}
				/>
				<Button onClick={handleResetInput}>Reset</Button>
			</div>

			<div className='CommandsLayout-help'>
				<h2>Commands list</h2>
				<dl className='CommandsLayout-command-list'>
					<dt className='CommandsLayout-command'>f</dt>
					<dd className='CommandsLayout-desc'>Move forward</dd>
					<dt className='CommandsLayout-command'>l</dt>
					<dd className='CommandsLayout-desc'>Rotate left</dd>
					<dt className='CommandsLayout-command'>r</dt>
					<dd className='CommandsLayout-desc'>Rotate right</dd>
				</dl>
			</div>
		</StyledCommandsLayout>
	);
}
