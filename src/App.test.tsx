import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';


it('renders the app', () => {
	render(<App />);
	const linkElement = screen.getByText(/Mars Rover/i);
	expect(linkElement).toBeInTheDocument();
});
