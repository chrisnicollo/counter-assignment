import { render, screen, fireEvent } from '@testing-library/react';
import Counter from '../components/Counter';

beforeEach(() => {
  render(<Counter />);
})

test('renders counter message', () => {
  const counterMessage = screen.queryByText(/Counter/i);
  expect(counterMessage).toBeInTheDocument();
});

test('should render initial count with value of 0', () => {
  const countNumber = screen.getByTestId('count').innerHTML;
  expect(countNumber).toBe('0');
})

test('clicking + increments the count', () => {
  fireEvent.click(screen.getByText('+'));
  const countNumber = screen.getByTestId('count');
  expect(countNumber).toHaveTextContent('1');
});

test('clicking - decrements the count', () => {
  fireEvent.click(screen.getByText('-'));
  const countNumber = screen.getByTestId('count');
  expect(countNumber).toHaveTextContent('-1');
});
