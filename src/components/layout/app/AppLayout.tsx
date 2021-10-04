import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { themeDarkMode, themeLightMode } from '../../../style/themes';

import { StyledApp } from './AppLayout.styled';
import { Title } from '../../title/Title';
import { GridLayout } from '../gridlayout/GridLayout';
import { CommandsLayout } from '../commandslayout/CommandsLayout';
import { Button } from '../../button/Button';
import { GlobalStyle } from '../../../style/GlobalStyle';


export const AppLayout = () => {
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
					<Button isActive={isDarkMode} onClick={toggleThemeMode}>
						{isDarkMode ? 'Light mode' : 'Dark mode'}
					</Button>
				</header>

				<GridLayout />

				<CommandsLayout />
			</StyledApp>
		</ThemeProvider>
	);
};
