import React from 'react';
import { render, screen } from '@testing-library/react';
import PhoneInput from './PhoneInput';

const data = {
  3: ['d', 'e', 'f'],
};

const props = {
  data,
};

describe('PhoneInput', () => {
  it('renders the button and displays the values', () => {
    render(<PhoneInput {...props} />);

    expect(screen.getAllByText('def')).toHaveLength(1);
  });
});
