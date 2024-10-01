import '@testing-library/jest-dom';
import { screen, render } from '@testing-library/react';
import { Button } from '@components/button';
import { describe } from 'node:test';

describe('Button component test', () => {
  it('render button', () => {
    render(<Button />);
    const button = screen.getByText('Click');
    expect(button).toBeInTheDocument();
  });
});
