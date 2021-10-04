import React from 'react';
import { Story, Meta } from '@storybook/react';

import { Input, IInputProps } from './Input';

export default {
	title: 'Components/Form/Input',
	component: Input,
	argTypes: {
		onChange: { action: 'Changed.' },
	},
} as Meta;


const Template: Story<IInputProps> = args => <Input {...args} />;

export const Default = Template.bind({});
Default.args = {
	name: 'input',
};
