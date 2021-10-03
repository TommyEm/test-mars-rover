import React, { useContext, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { themeDarkMode, themeLightMode } from './style/themes';

import { AppContext } from './store/Store';
import { StyledApp } from './App.styled';
import { Title } from './components/title/Title';
import { GridLayout } from './components/layout/gridlayout/GridLayout';
import { CommandsLayout } from './components/layout/commandslayout/CommandsLayout';
import { Button } from './components/button/Button';
import { GlobalStyle } from './style/GlobalStyle';


function App() {
	const { state: { commands } } = useContext(AppContext);
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
					<Button onClick={toggleThemeMode}>Toggle</Button>
				</header>

				<GridLayout commands={commands} />

				<CommandsLayout />
			</StyledApp>
		</ThemeProvider>
	);
}

export default App;
