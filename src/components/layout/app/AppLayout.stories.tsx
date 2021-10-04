import React from 'react';
import { Story, Meta } from '@storybook/react';

import { AppLayout } from './AppLayout';

export default {
	title: 'Layout/App',
	component: AppLayout,
} as Meta;


const Template: Story = args => <AppLayout {...args} />;

export const Default = Template.bind({});
