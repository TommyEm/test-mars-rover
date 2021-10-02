import React from 'react';
import {
	cleanup,
	render,
	screen
} from '@testing-library/react';
import { composeStories } from '@storybook/testing-react';

import * as stories from '../Button.stories';

const { Default } = composeStories(stories);


afterEach(cleanup);
const storyComponent = <Default />;

it('should render a button', () => {
	render(storyComponent);
	expect(screen.getByTestId('test-Button')).toBeVisible();
});

it('matches snapshot', () => {
	const tree = render(storyComponent);
	expect(tree).toMatchSnapshot();
});

it('should render an active button', () => {
	render(storyComponent);
	expect(screen.getByTestId('test-Button')).toHaveClass('mod-active');
});
