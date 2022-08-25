import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

test('Should render the page', () => {
  render(<App />);
  const buttons = screen.getAllByRole('button')
  expect(buttons[0]).toBeInTheDocument();
});



