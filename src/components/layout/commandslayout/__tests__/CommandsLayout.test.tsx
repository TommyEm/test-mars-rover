import React from 'react';
import {
	cleanup,
	// fireEvent,
	render,
	screen
} from '@testing-library/react';
import { composeStories } from '@storybook/testing-react';

import * as stories from '../CommandsLayout.stories';
import { Store } from '../../../../store/Store';

const { Default } = composeStories(stories);


afterEach(cleanup);
const storyComponent = <Store><Default /></Store>;

it('should render a commands layout', () => {
	render(storyComponent);
	expect(screen.getByTestId('test-CommandsLayout')).toBeVisible();
});

it('matches snapshot', () => {
	const tree = render(storyComponent);
	expect(tree).toMatchSnapshot();
});

// it('should update the store', () => {
// 	const onChange = jest.fn();
// 	render(storyComponent);
// 	fireEvent.change(screen.getByTestId('test-Input'), { target: { value: 'f' } });
// });
