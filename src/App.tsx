import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { themeModes } from './style/themes';

import { Title } from './components/title/Title';

import './App.css';


function App() {
	const [theme, setTheme] = useState(themeModes.dark);

	return (
		<ThemeProvider theme={theme}>
			<div className='App'>
				<Title>Mars Rover</Title>
			</div>
		</ThemeProvider>
	);
}

export default App;
