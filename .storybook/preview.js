import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from '../src/style/GlobalStyle';
import { themeModes } from '../src/style/themes';


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
			<GlobalStyle />
			<ThemeProvider theme={themeModes.dark}>
				<Story {...context} />
			</ThemeProvider>
		</>
	);
};
export const decorators = [withThemeProvider];
