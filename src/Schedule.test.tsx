import React from 'react';
import {Schedule} from './Schedule';
import {render, waitForElement} from '@testing-library/react-native';
import {mocked} from 'ts-jest';
import {API} from 'aws-amplify';
import '@testing-library/jest-native/extend-expect';

jest.mock('aws-amplify', () => ({
  API: {
    graphql: jest.fn(),
  },
  graphqlOperation: jest.fn(),
}));

describe('Schedule', () => {
  it('Shows both days', async () => {
    mocked(API.graphql).mockResolvedValue({
      data: {listTalks: {items: []}},
    });
    const {queryByText} = render(<Schedule />);
    await waitForElement(() => queryByText(/November 19/i));
  });
});
