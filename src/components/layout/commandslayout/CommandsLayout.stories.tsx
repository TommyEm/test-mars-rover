import React from 'react';
import { Story, Meta } from '@storybook/react';

import { CommandsLayout, ICommandsLayoutProps } from './CommandsLayout';

export default {
	title: 'Layout/Commands',
	component: CommandsLayout,
} as Meta;


const Template: Story<ICommandsLayoutProps> = args => <CommandsLayout {...args} />;

export const Default = Template.bind({});
