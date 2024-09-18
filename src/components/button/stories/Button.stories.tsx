import type { Meta, StoryObj } from '@storybook/react';

import { Button } from '../ui/Button';

const meta: Meta<typeof Button> = {
	title: 'Design System/Buttons/Button',
	component: Button,
	tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Button>;

export const ButtonStory: Story = {
	render: () => {
		return (
			<>
				<Button
					title='Сбросить'
					type='reset'
					onClick={() => alert('клик на кнопку сбросить')}
				/>
				<Button
					title='Применить'
					type='submit'
					onClick={() => alert('клик на кнопку применить')}
				/>
			</>
		);
	},
};
