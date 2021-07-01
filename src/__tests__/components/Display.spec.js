import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Display from '../../components/Display';

test('should render the button component', () => {
  render(<Display total="0" />);
  const btn = screen.getByTestId('show-panel');
  expect(btn).toHaveTextContent('0');
});
