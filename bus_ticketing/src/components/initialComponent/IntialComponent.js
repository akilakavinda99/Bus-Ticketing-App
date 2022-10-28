import React from 'react';
import {Image, Text, View} from 'react-native';

const IntialComponent = () => {
  return (
    <View style={{}}>
      <Text
        style={{
          marginTop: 20,
          marginLeft: 20,
          marginRight: 20,
          marginBottom: 40,
          textAlign: 'center',
          fontWeight: '800',
        }}>
        Select you destination and click on search to view available buses.
      </Text>
      <Image
        style={{
          marginLeft: 40,
          marginTop: 20,
          width: 300,
          height: 300,
        }}
        source={{
          uri: 'https://i.postimg.cc/Vvwj5w71/93432-searching.gif',
        }}
      />
    </View>
  );
};

export default IntialComponent;
