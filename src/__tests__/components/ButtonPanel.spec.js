import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import ButtonPanel from '../../components/ButtonPanel';

test('should render the button component', () => {
  render(<ButtonPanel />);
  const btnPanel = screen.getByTestId('button-panel');
  expect(btnPanel).toHaveTextContent('%');
});
