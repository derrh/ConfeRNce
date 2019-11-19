import React from 'react';
import {Schedule} from './Schedule';
import {render} from '@testing-library/react-native';

describe('Schedule', () => {
  it('Shows both days', () => {
    const {getByText} = render(<Schedule />);
    expect(getByText(/November /i));
  });
});
