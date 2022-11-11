import {render} from '@testing-library/react-native';
import React from 'react';

import QRComponent from '../src/components/qrComponent/QRComponent';

test('renders the no result page', () => {
  render(<QRComponent />);
});
