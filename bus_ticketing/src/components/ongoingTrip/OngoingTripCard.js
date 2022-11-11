import React from 'react';
import {View, StyleSheet, Image, Text} from 'react-native';

const OngoingTripCard = props => {
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
        Ongoing Trip Details
      </Text>
      <Image
        style={{
          width: 150,
          height: 100,
          marginLeft: 80,
          marginBottom: 50,
        }}
        source={{
          uri: 'https://i.postimg.cc/kGMVxRS1/57997-travelers-find-location.gif',
        }}
      />
      <Text
        style={{
          marginLeft: 30,
          fontWeight: '500',
          marginBottom: 20,
        }}>
        Bus Number : {props.busNumber}
      </Text>
      <Text
        style={{
          marginLeft: 30,
          fontWeight: '500',
          marginBottom: 20,
        }}>
        Start Location : {props.start}
      </Text>
      <Text
        style={{
          marginLeft: 30,
          fontWeight: '500',
          marginBottom: 20,
        }}>
        Started Time : {props.time}
      </Text>
    </View>
  );
};

export default OngoingTripCard;
