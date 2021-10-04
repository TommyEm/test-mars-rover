import { Store } from '../src/store/Store';
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
			<Store>
				<ThemeProvider theme={themeDarkMode}>
					<GlobalStyle />
					<Story {...context} />
				</ThemeProvider>
			</Store>
		</>
	);
};
export const decorators = [withThemeProvider];
