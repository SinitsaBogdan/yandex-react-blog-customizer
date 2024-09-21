import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { Button } from '../ui/Button';

test('render button', () => {
	render(<Button title='' />);
	const button = screen.getByRole('button');
	expect(button).toBeInTheDocument();
});

test('render button with text', () => {
	render(<Button title='Click me'></Button>);
	const button = screen.getByText('Click me');
	expect(button).toBeInTheDocument();
});
