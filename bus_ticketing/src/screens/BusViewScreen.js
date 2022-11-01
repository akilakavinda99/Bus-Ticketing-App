import React from 'react';

import {View, StyleSheet, Text} from 'react-native';
import {Button, TextInput} from 'react-native-paper';
import busViewScreenStyle from './styles/BusViewStyles';

const BusViewScreen = ({navigation, route}) => {
  const {all} = route.params;
  console.log(all);
  return (
    <View>
      <View>
        <Text style={busViewScreenStyle.busNUmberText}>Bus Number</Text>
        <Text style={busViewScreenStyle.busNUmber}>{all.bus.busNumber}</Text>
      </View>
      <View style={busViewScreenStyle.textView}>
        <Text style={busViewScreenStyle.arrivalTime}>
          Arrival Time- {all.arivalTimeOnDestination}
        </Text>
        <Text style={busViewScreenStyle.destination}>
          Destination Arrival TIme -
        </Text>
        <Text style={busViewScreenStyle.destination}>Seat Capacity - </Text>
      </View>
      <Text style={busViewScreenStyle.tPriceText}>Ticket Price</Text>

      <Text style={busViewScreenStyle.tPrice}>100 LKR</Text>
      <View>
        <Button style={busViewScreenStyle.bookButton} mode="contained">
          Book Ticket
        </Button>
        <Button style={busViewScreenStyle.bookButton} mode="contained">
          View Route
        </Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({});

export default BusViewScreen;
