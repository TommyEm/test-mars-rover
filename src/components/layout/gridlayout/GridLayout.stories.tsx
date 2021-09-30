import React from 'react';
import { Story, Meta } from '@storybook/react';

import { GridLayout, IGridLayoutProps } from './GridLayout';

export default {
	title: 'Components/Layout/GridLayout',
	component: GridLayout,
} as Meta;


const Template: Story<IGridLayoutProps> = args => <GridLayout {...args} />;

export const Default = Template.bind({});
Default.args = {

};
