import React from 'react';
import {Dimensions, View} from 'react-native';
import MapViewDirections from 'react-native-maps-directions';
import MapView, {Marker} from 'react-native-maps';
import {
  GOOGLE_MAPS_APIKEY,
  INITIAL_LATITUDE,
  INITIAL_LATITUDE_DELTA,
  INITIAL_LONGITUDE,
} from '../constants/map.constants';
import getInitialLongitudeDelta from '../utils/getInitialLongitude';

const MapDirectionScreen = () => {
  const INITIAL_LONGITUDE_DELTA = getInitialLongitudeDelta();
  const origin = {latitude: 6.0329, longitude: 80.2168};
  const destination = {latitude: 6.9271, longitude: 79.8612};
  return (
    <View>
      <MapView
        style={{
          width: Dimensions.get('window').width,
          height: Dimensions.get('window').height,
        }}
        initialRegion={{
          latitude: INITIAL_LATITUDE,
          longitude: INITIAL_LONGITUDE,
          latitudeDelta: INITIAL_LATITUDE_DELTA,
          longitudeDelta: INITIAL_LONGITUDE_DELTA,
        }}>
        <Marker
          coordinate={{latitude: origin.latitude, longitude: origin.longitude}}
        />
        <Marker
          coordinate={{
            latitude: destination.latitude,
            longitude: destination.longitude,
          }}
        />

        <MapViewDirections
          origin={origin}
          destination={destination}
          apikey={GOOGLE_MAPS_APIKEY}
          strokeWidth={3}
          strokeColor="hotpink"
        />
      </MapView>
    </View>
  );
};

export default MapDirectionScreen;
