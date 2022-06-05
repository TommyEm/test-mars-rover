import React from 'react';
import { Story, Meta } from '@storybook/react';

import { Rover, IRoverProps } from './Rover';

export default {
	title: 'Components/Rover',
	component: Rover,
} as Meta;

const Template: Story<IRoverProps> = args => <Rover {...args} />;

export const Default = Template.bind({});
Default.args = {
	direction: 'N',
	position: {
		x: 0,
		y: 0,
	},
};
