import {Dimensions, View} from 'react-native';
import {INITIAL_LATITUDE_DELTA} from '../constants/map.constants';

const getInitialLongitudeDelta = () => {
  const {width, height} = Dimensions.get('window');
  const ASPECT_RATIO = width / height;
  const INITIAL_LONGITUDE_DELTA = INITIAL_LATITUDE_DELTA * ASPECT_RATIO;
  return INITIAL_LONGITUDE_DELTA;
};

export default getInitialLongitudeDelta;
