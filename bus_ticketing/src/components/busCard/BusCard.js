/* eslint-disable react-native/no-inline-styles */
import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
// import DropShadow from 'react-native-drop-shadow';
import {Chip} from 'react-native-paper';
import busCardStyles from './BusCardStyles';

const BusCard = props => {
  const navigation = useNavigation();
  // console.log(props.allDetails);
  const all = props.allDetails;
  const ticketPrice = props.ticketPrice;
  all.ticketPrice = ticketPrice;
  const navigateToBusView = () => {
    navigation.navigate('BusView', {all: all});
  };

  return (
    <TouchableOpacity onPress={navigateToBusView} testID="navigateToBus">
      {/* <DropShadow
        style={{
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 0,
          },
          shadowOpacity: 0.5,
          shadowRadius: 5,
        }}> */}
      <View style={busCardStyles.mainView}>
        <View style={busCardStyles.row}>
          <Text style={busCardStyles.aTime}>
            Arrival Time - {props.arrivalTime}
          </Text>
          {props.availableSeat < 10 ? (
            <Chip
              icon="information"
              onPress={() => console.log('Pressed')}
              selected={true}
              selectedColor="red"
              style={busCardStyles.chip}>
              crowded
            </Chip>
          ) : (
            <Chip
              icon="information"
              onPress={() => console.log('Pressed')}
              selected={true}
              selectedColor="green"
              style={busCardStyles.chip2}>
              Seats Available
            </Chip>
          )}
        </View>
        <View>
          <View style={busCardStyles.row}>
            <Text style={busCardStyles.type}>
              Type - <Text>{props.busType}</Text>
            </Text>
            <Text style={busCardStyles.price}>
              Price Per Person - {ticketPrice} LKR
            </Text>
          </View>
        </View>
      </View>
      {/* </DropShadow> */}
    </TouchableOpacity>
  );
};

export default BusCard;
