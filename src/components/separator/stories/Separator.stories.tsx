import type { Meta, StoryObj } from '@storybook/react';

import { Separator } from '../ui/Separator';

const meta: Meta<typeof Separator> = {
	title: 'Design System/Separator',
	component: Separator,
	tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Separator>;

export const SelectStory: Story = {
	render: () => {
		return <Separator />;
	},
};
