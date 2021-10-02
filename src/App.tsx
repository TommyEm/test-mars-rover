import React, { useContext, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { themeDarkMode, themeLightMode } from './style/themes';

import { AppContext } from './store/Store';
import { Title } from './components/title/Title';
import { GridLayout } from './components/layout/gridlayout/GridLayout';
import { CommandsLayout } from './components/layout/commandslayout/CommandsLayout';
import { Button } from './components/button/Button';
import { GlobalStyle } from './style/GlobalStyle';


function App() {
	const { state: { commands }, dispatch } = useContext(AppContext);
	const [isDarkMode, setIsDarkMode] = useState<boolean>(true);
	const [theme, setTheme] = useState(themeDarkMode);

	const toggleThemeMode = () => {
		setTheme(isDarkMode ? themeLightMode : themeDarkMode);
		setIsDarkMode(!isDarkMode);
	}

	return (
		<ThemeProvider theme={theme}>
			<GlobalStyle />
			<div className='App'>
				<Title>Mars Rover</Title>

				<Button onClick={toggleThemeMode}>Toggle</Button>

				<GridLayout commands={commands} />

				<CommandsLayout />
			</div>
		</ThemeProvider>
	);
}

export default App;
