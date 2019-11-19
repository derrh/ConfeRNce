import React from 'react';
import {Schedule} from './Schedule';
import {render, waitForElement} from '@testing-library/react-native';
import {mocked} from 'ts-jest/utils';
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
      data: {
        listTalks: {
          items: [
            {
              date: 'November 19',
              name: 'The Nanosecond',
              speakerName: 'Grace Hopper',
              speakerAvatar:
                'https://upload.wikimedia.org/wikipedia/commons/a/ad/Commodore_Grace_M._Hopper%2C_USN_%28covered%29.jpg',
              time: '7:30-8:15',
            },
            {
              date: 'November 20',
              name: 'Write tests. Not too many. Mostly integration.',
              speakerName: 'Kent C. Dodds',
              speakerAvatar:
                'https://kentcdodds.com/static/kent-1a92781821038056f824066c22290682.png',
              time: '7:30-8:15',
            },
          ],
        },
      },
    });
    const {queryByText, queryByTestId, getByText} = render(<Schedule />);
    await waitForElement(() => queryByText(/November 19/i));

    const talk1 = queryByTestId('Talk: Grace Hopper');
    expect(talk1).toContainElement(getByText('Grace Hopper'));
    expect(talk1).toContainElement(getByText('The Nanosecond'));
    expect(talk1).toContainElement(getByText(/7:30-8:15/));

    expect(queryByText('Kent C. Dodds')).not.toBeTruthy();
  });
});
