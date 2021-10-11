import { render, screen } from '@testing-library/react';
import IphoneSlider from './App';

test('renders learn react link', () => {
  render(<IphoneSlider />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
