import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from '../src/style/GlobalStyle';
import { themeDarkMode } from '../src/style/themes';


// const tokenContext = require.context(
// 	'!!raw-loader!../src/design-tokens/build/css',
// 	true,
// 	/.\.(css|less|scss|svg)$/
// );

// const tokenFiles = tokenContext.keys().map(function (filename) {
// 	return { filename: filename, content: tokenContext(filename).default };
// });


export const parameters = {
	actions: { argTypesRegex: "^on[A-Z].*" },
	controls: {
		matchers: {
			color: /(background|color)$/i,
			date: /Date$/,
		},
	},
	// designToken: {
	// 	files: tokenFiles,
	// },
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
