import React from 'react';
import { render, screen } from '@testing-library/react';
import Suggestions from './Suggestions';

const suggestions = ['peach', 'apple', 'kiwi'];

const props = {
  suggestions,
};

describe('Suggestions', () => {
  it('displays the suggestions', () => {
    render(<Suggestions {...props} />);

    expect(screen.getAllByText('peach')).toHaveLength(1);
  });
});
