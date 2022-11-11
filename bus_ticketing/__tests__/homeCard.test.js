import {render} from '@testing-library/react-native';
import React from 'react';
import HomeCard from '../src/components/homeCard/HomeCard';

const props = {
  image: 'http/',
  text: 'fd',
};
describe('Home Card Component Testing', () => {
  it('Check if props are been passed to the component', () => {
    render(<HomeCard props={props} />);
  });
  it('Check Without props', () => {
    render(<HomeCard />);
  });
});
