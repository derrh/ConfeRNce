import React from 'react';
import {Schedule} from './Schedule';
import renderer from 'react-test-renderer';

describe('Schedule', () => {
  it('Shows both days', () => {
    const r = renderer.create(<Schedule />);
    expect(r.toJSON()).toMatchSnapshot();
  });
});
