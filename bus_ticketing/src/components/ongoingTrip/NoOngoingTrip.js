import React from 'react';
import {View, StyleSheet, Image, Text} from 'react-native';

const NoOngoingTrip = () => {
  return (
    <View
      style={{
        backgroundColor: 'white',
        width: 300,
        height: 350,
        marginLeft: 50,
        marginTop: 50,
        borderRadius: 20,
        elevation: 20,
        marginBottom: 50,
      }}>
      <Text
        style={{
          textAlign: 'center',
          fontSize: 20,
          fontWeight: 'bold',
          marginBottom: 20,
          marginTop: 10,
        }}>
        No ongoing trips currently
      </Text>
      <Image
        style={{
          width: 250,
          height: 200,
          marginLeft: 20,
          //   marginBottom: 40,
        }}
        source={{
          uri: 'https://i.postimg.cc/hPCRpQFF/6546-broken-bus.gif',
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default NoOngoingTrip;
