import React from 'react';
import {
	cleanup,
	fireEvent,
	render,
	screen
} from '@testing-library/react';
import { composeStories } from '@storybook/testing-react';

import * as stories from '../AppLayout.stories';

const { Default } = composeStories(stories);


afterEach(cleanup);
const storyComponent = <Default />;

it('renders the app', () => {
	render(storyComponent);
	const linkElement = screen.getByText(/Mars Rover/i);
	expect(linkElement).toBeInTheDocument();
});

it('should move the rover when inputting some commands', () => {
	render(storyComponent);
	const input = screen.getByTestId('test-Input');
	fireEvent.change(input, { target: { value: 'f' } });
	fireEvent.change(input, { target: { value: 'r' } });
	fireEvent.change(input, { target: { value: 'f' } });

	const rover = screen.getByTestId('test-Rover');
	const roverStyle = window.getComputedStyle(rover);

	expect(roverStyle.bottom).toBe('50px');
	expect(roverStyle.left).toBe('50px');
	expect(roverStyle.transform).toBe('rotate(90deg)');
});

it('should toggle the color mode', () => {
	render(storyComponent);
	const toggleBtn = screen.getByText(/Light mode/);
	expect(toggleBtn).toBeVisible();

	const title = screen.getByText(/Mars Rover/);
	const titleDarkStyle = window.getComputedStyle(title);
	expect(titleDarkStyle.color).toBe('rgb(255, 255, 255)');

	fireEvent.click(toggleBtn);
	expect(toggleBtn).not.toHaveClass('mod-active');
	const titleLightStyle = window.getComputedStyle(title);
	expect(titleLightStyle.color).toBe('rgb(0, 0, 0)');
});
