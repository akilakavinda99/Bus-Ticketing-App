import React from 'react';
import {Image, Text, View} from 'react-native';

const NoResults = () => {
  return (
    <View>
      <Text
        style={{
          marginTop: 80,
          textAlign: 'center',
          fontWeight: '800',
          fontSize: 20,
        }}>
        No buses available
      </Text>
      <Image
        style={{
          marginLeft: 90,
          width: 200,
          height: 200,
        }}
        source={{
          uri: 'https://i.postimg.cc/fT9sd4tc/96526-search-not-found.gif',
        }}
      />
    </View>
  );
};

export default NoResults;
