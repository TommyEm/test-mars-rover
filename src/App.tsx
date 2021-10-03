import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { themeDarkMode, themeLightMode } from './style/themes';

import { StyledApp } from './App.styled';
import { Title } from './components/title/Title';
import { GridLayout } from './components/layout/gridlayout/GridLayout';
import { CommandsLayout } from './components/layout/commandslayout/CommandsLayout';
import { Button } from './components/button/Button';
import { GlobalStyle } from './style/GlobalStyle';


function App() {
	const [isDarkMode, setIsDarkMode] = useState<boolean>(true);
	const [theme, setTheme] = useState(themeDarkMode);

	const toggleThemeMode = () => {
		setTheme(isDarkMode ? themeLightMode : themeDarkMode);
		setIsDarkMode(!isDarkMode);
	}

	return (
		<ThemeProvider theme={theme}>
			<GlobalStyle />
			<StyledApp className='App'>
				<header className='App-header'>
					<Title>Mars Rover</Title>
					<Button onClick={toggleThemeMode}>
						{isDarkMode ? 'Light mode' : 'Dark mode'}
					</Button>
				</header>

				<GridLayout />

				<CommandsLayout />
			</StyledApp>
		</ThemeProvider>
	);
}

export default App;
