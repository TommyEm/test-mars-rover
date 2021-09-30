import React, { useCallback, useContext } from 'react';
import { COMMAND_LIST } from '../../../constants';
import { AppContext } from '../../../store/Store';
import * as actions from '../../../store/actionTypes';

import { StyledCommandsLayout } from './CommandsLayout.styled';
import { Label } from '../../form/label/Label';
import { Input } from '../../form/input/Input';
import { Button } from '../../button/Button';


export interface ICommandsLayoutProps {
	className?: string;
}

export const CommandsLayout: React.FC<ICommandsLayoutProps> = ({
	className,
}: ICommandsLayoutProps) => {
	const { state: { commands }, dispatch } = useContext(AppContext);

	const handleChangeInput = useCallback((command) => {
		if (COMMAND_LIST.includes(command.slice(-1))) { // The last key input is in the command list
			dispatch({ type: actions.UPDATE_COMMANDS, payload: command });
		}
	}, [dispatch]);

	const handleResetInput = useCallback(() => {
		dispatch({ type: actions.RESET_COMMANDS });
	}, [dispatch]);

    return (
		<StyledCommandsLayout
			className={`CommandsLayout ${className}`}
			data-testid='test-CommandsLayout'
		>
			<Label forHtml='commands'>Enter some commands:</Label>
			<Input
				name='commands'
				value={commands}
				onChange={e => handleChangeInput(e.currentTarget.value)}
			/>
			<Button onClick={handleResetInput}>Reset</Button>
		</StyledCommandsLayout>
	);
}
