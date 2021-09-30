import React from 'react';
import { Story, Meta } from '@storybook/react';

import { Button, IButtonProps } from './Button';

export default {
	title: 'Components/Button',
	component: Button,
} as Meta;


const Template: Story<IButtonProps> = args => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
	children: 'Button',
};
