import React, { useContext, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { themeModes } from './style/themes';

import { AppContext } from './store/Store';
import { Title } from './components/title/Title';
import { GridLayout } from './components/layout/gridlayout/GridLayout';
import { CommandsLayout } from './components/layout/commandslayout/CommandsLayout';


function App() {
	const { state: { commands }, dispatch } = useContext(AppContext);
	const [theme, setTheme] = useState(themeModes.dark);

	return (
		<ThemeProvider theme={theme}>
			<div className='App'>
				<Title>Mars Rover</Title>

				<GridLayout commands={commands} />

				<CommandsLayout />
			</div>
		</ThemeProvider>
	);
}

export default App;
