import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Button from '../../components/Button';

test('should render the button component', () => {
  render(<Button btnName="4" />);
  const btn = screen.getByTestId('button');
  expect(btn).toHaveTextContent('4');
});
