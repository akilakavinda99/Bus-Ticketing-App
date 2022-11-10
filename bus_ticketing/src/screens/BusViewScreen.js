import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {Button} from 'react-native-paper';

import busViewScreenStyle from './styles/BusViewStyles';

const BusViewScreen = ({navigation, route}) => {
  // Get the passed params from previous screen
  const {all} = route.params;
  console.log(all.routeLonLat);

  const handleBookTicket = async () => {
    // Creating the ticket object
    const ticket = {
      ticketType: 'booking',
      ticketPrice: all.ticketPrice,
      ticketFrom: all.startLocation,
      ticketTo: all.destination,
      ticketTime: all.arivalTimeOnStart,
      ticketBus: all.bus.busNumber,
      routeNumber: all.route,
    };
    // Passing the ticket object to the payment view through navigation props.
    navigation.navigate('Payment', {ticket: ticket});
  };

  const navigateToRouteView = () => {
    navigation.navigate('MapScreen', {
      endLon: all.routeLonLat.endLonLat,
      startLon: all.routeLonLat.startLonLat,
    });
  };

  return (
    <View>
      <View>
        <Text style={busViewScreenStyle.busNUmberText}>Bus Number</Text>
        <Text style={busViewScreenStyle.busNUmber}>{all.bus.busNumber}</Text>
      </View>
      <View style={busViewScreenStyle.textView}>
        <Text style={busViewScreenStyle.arrivalTime}>
          Arrival Time- {all.arivalTimeOnStart}
        </Text>
        <Text style={busViewScreenStyle.destination}>
          Destination Arrival TIme - {all.arivalTimeOnDestination}
        </Text>
        <Text style={busViewScreenStyle.destination}>
          Seat Capacity - {all.bus.busCapacity}
        </Text>
      </View>
      <Text style={busViewScreenStyle.tPriceText}>Ticket Price</Text>

      <Text style={busViewScreenStyle.tPrice}>{all.ticketPrice} LKR</Text>
      <View>
        <Button
          style={busViewScreenStyle.bookButton}
          mode="contained"
          onPress={handleBookTicket}>
          Book Ticket
        </Button>
        <Button
          style={busViewScreenStyle.bookButton}
          mode="contained"
          onPress={navigateToRouteView}>
          View Route
        </Button>
      </View>
    </View>
  );
};

export default BusViewScreen;
