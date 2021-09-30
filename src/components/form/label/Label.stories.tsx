import React from 'react';
import { Story, Meta } from '@storybook/react';

import { Label, ILabelProps } from './Label';

export default {
	title: 'Components/Form/Label',
	component: Label,
} as Meta;


const Template: Story<ILabelProps> = args => <Label {...args} />;

export const Default = Template.bind({});
Default.args = {
	children: 'Label',
};
