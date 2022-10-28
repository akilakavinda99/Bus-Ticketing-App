import React from 'react';
import {Dimensions, View} from 'react-native';
import MapViewDirections from 'react-native-maps-directions';
import MapView, {Marker} from 'react-native-maps';

const MapDirectionScreen = () => {
  const {width, height} = Dimensions.get('window');
  const ASPECT_RATIO = width / height;
  const LATITUDE = 7.8731;
  const LONGITUDE = 80.7718;
  const LATITUDE_DELTA = 5;
  const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;
  const origin = {latitude: 6.0329, longitude: 80.2168};
  const destination = {latitude: 6.9271, longitude: 79.8612};
  const GOOGLE_MAPS_APIKEY = 'AIzaSyBSIp6m_Abdao0a5qgr_rS5Ryu2Oa_wHUw';
  return (
    <View>
      <MapView
        style={{
          width: Dimensions.get('window').width,
          height: Dimensions.get('window').height,
        }}
        initialRegion={{
          latitude: LATITUDE,
          longitude: LONGITUDE,
          latitudeDelta: LATITUDE_DELTA,
          longitudeDelta: LONGITUDE_DELTA,
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
