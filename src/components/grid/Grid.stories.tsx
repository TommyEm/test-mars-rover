import React from 'react';
import { Story, Meta } from '@storybook/react';

import { Grid, IGridProps } from './Grid';

export default {
	title: 'Components/Grid',
	component: Grid,
} as Meta;


const Template: Story<IGridProps> = args => <Grid {...args} />;

export const Default = Template.bind({});
Default.args = {

};
