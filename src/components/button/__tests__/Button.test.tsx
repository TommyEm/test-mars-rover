import React from 'react';
import {
	cleanup,
	fireEvent,
	render,
	screen
} from '@testing-library/react';
import { composeStories } from '@storybook/testing-react';

import * as stories from '../Button.stories';

const { Default, Active } = composeStories(stories);


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

it('calls "onClick" prop on button click', () => {
	const onClick = jest.fn();
	render(<Default onClick={onClick} />);
	fireEvent.click(screen.getByText(/Button/i));
	expect(onClick).toHaveBeenCalled();
});

it('should render an active button', () => {
	render(<Active />);
	expect(screen.getByTestId('test-Button')).toHaveClass('mod-active');
});
