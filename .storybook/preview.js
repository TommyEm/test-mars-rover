import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from '../src/style/GlobalStyle';
import { themeDarkMode } from '../src/style/themes';


export const parameters = {
	actions: { argTypesRegex: "^on[A-Z].*" },
	controls: {
		matchers: {
			color: /(background|color)$/i,
			date: /Date$/,
		},
	},
};

// Wrap stories with global styles
const withThemeProvider = (Story, context) => {
	return (
		<>
			<ThemeProvider theme={themeDarkMode}>
				<GlobalStyle />
				<Story {...context} />
			</ThemeProvider>
		</>
	);
};
export const decorators = [withThemeProvider];
