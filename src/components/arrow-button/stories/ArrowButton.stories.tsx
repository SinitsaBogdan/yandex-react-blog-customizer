import type { Meta, StoryObj } from '@storybook/react';

import { ArrowButton } from '../ui/ArrowButton';

const meta: Meta<typeof ArrowButton> = {
	title: 'Design System/Buttons/ArrowButton',
	component: ArrowButton,
	tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ArrowButton>;

export const ArrowButtonStory: Story = {
	render: () => {
		return (
			<>
				<ArrowButton />
			</>
		);
	},
};
