import {Dimensions, View} from 'react-native';
import {INITIAL_LATITUDE_DELTA} from '../constants/map.constants';

// Function returning the longitude delta.
const getInitialLongitudeDelta = () => {
  // Get screen size
  const {width, height} = Dimensions.get('window');
  // Calculate aspect ratio.
  const ASPECT_RATIO = width / height;
  // Calculate longitude delta.
  const INITIAL_LONGITUDE_DELTA = INITIAL_LATITUDE_DELTA * ASPECT_RATIO;
  return INITIAL_LONGITUDE_DELTA;
};

export default getInitialLongitudeDelta;
