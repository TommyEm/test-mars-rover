import React, { useCallback, useContext, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { themeModes } from './style/themes';

import { AppContext } from './store/Store';
import * as actions from './store/actionTypes';
import { COMMAND_LIST } from './constants';
import { Title } from './components/title/Title';
import { GridLayout } from './components/layout/gridlayout/GridLayout';
import { Input } from './components/form/input/Input';

import './App.css';


function App() {
	const { state: { commands }, dispatch } = useContext(AppContext);
	const [theme, setTheme] = useState(themeModes.dark);

	const handleChangeInput = useCallback((command) => {
		if (COMMAND_LIST.includes(command.slice(-1))) { // The last key input is in the command list
			dispatch({ type: actions.UPDATE_COMMANDS, payload: command });
		}
	}, [dispatch]);

	return (
		<ThemeProvider theme={theme}>
			<div className='App'>
				<Title>Mars Rover</Title>

				<GridLayout commands={commands} />

				<Input
					name='commands'
					value={commands}
					onChange={e => handleChangeInput(e.currentTarget.value)}
				/>
			</div>
		</ThemeProvider>
	);
}

export default App;
