import {render} from '@testing-library/react-native';
import React from 'react';
import NoResults from '../src/components/noResults/NoResults';

// test('renders the no result page', () => {
//   render(<NoResults />);
// });

describe('No Results Component', () => {
  it('Have a text element to view the text', () => {
    const testIdName = 'NoBusText';

    const {getByTestId} = render(<NoResults />);

    const foundButton = getByTestId(testIdName);

    expect(foundButton).toBeTruthy();
  });
});
