import React from 'react';
import {
	cleanup,
	fireEvent,
	render,
	screen
} from '@testing-library/react';
import { composeStories } from '@storybook/testing-react';

import * as stories from '../Input.stories';

const { Default } = composeStories(stories);


afterEach(cleanup);
const storyComponent = <Default />;

it('should render an input field', () => {
	render(storyComponent);
	const input = screen.getByTestId('test-Input');
	expect(input).toBeVisible();
	expect(input).toHaveAttribute('name', 'input');
});

it('matches snapshot', () => {
	const tree = render(storyComponent);
	expect(tree).toMatchSnapshot();
});

it('calls "onChange" prop on input change', () => {
	const onChange = jest.fn();
	render(<Default onChange={onChange} />);
	fireEvent.change(screen.getByTestId('test-Input'), { target: { value: 'Test input' }});
	expect(onChange).toHaveBeenCalled();
});
