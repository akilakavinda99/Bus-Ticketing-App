/* eslint-disable react-native/no-inline-styles */
import React, { useRef } from 'react';
import { ImageBackground, Text, View } from 'react-native';
import DropShadow from 'react-native-drop-shadow';
import { Button } from 'react-native-paper';
import ViewShot from 'react-native-view-shot';
import QRComponent from '../components/qrComponent/QRComponent';
import ticketScreenStyle from './styles/TicketScreenStyles';

const TicketScreen = ({ navigation, route }) => {
  const { ticket } = route.params;
  console.log(ticket);
  const ref = useRef();

  const takeSs = () => {
    ref.current.capture().then(uri => {
      console.log('do something with ', uri);
    });
  };

  return (
    <View
      style={{
        height: '100%',
        backgroundColor: 'white',
      }}>
      <ViewShot
        ref={ref}
        options={{
          fileName: 'Your-File-Name',
          format: 'jpg',
          quality: 0.9,
          result: 'data-uri',
        }}>
        <DropShadow
          style={{
            shadowColor: '#000',
            shadowOffset: {
              width: 0,
              height: 0,
            },
            shadowOpacity: 0.5,
            shadowRadius: 5,
          }}>
          <ImageBackground
            style={ticketScreenStyle.imageBg}
            imageStyle={{ borderRadius: 15 }}
            source={{
              uri: 'https://i.postimg.cc/WbxpKc5N/Untitled-design-2.png',
            }}>
            <View style={ticketScreenStyle.mainRow}>
              <View style={ticketScreenStyle.row}>
                <Text style={ticketScreenStyle.fromTxt}>From</Text>
                <Text style={ticketScreenStyle.toTxt}>To</Text>
              </View>
              <View style={ticketScreenStyle.row}>
                <Text style={ticketScreenStyle.from}>{ticket.ticketFrom}</Text>
                <Text style={ticketScreenStyle.to}>{ticket.ticketTo}</Text>
              </View>
              <View style={ticketScreenStyle.row}>
                <Text style={ticketScreenStyle.dt}>Arrival Time</Text>
                <Text style={ticketScreenStyle.seatNo}>Route No</Text>
              </View>
              <View style={ticketScreenStyle.row}>
                <Text style={ticketScreenStyle.dt1}>{ticket.ticketTime}</Text>
                <Text style={ticketScreenStyle.seatNo2}>{ticket.routeNumber}</Text>
              </View>
              <Text style={ticketScreenStyle.bsNumberTxt}>Bus Number</Text>
              <View style={ticketScreenStyle.nmbrPlate}>
                <Text
                  style={{
                    fontSize: 20,
                    fontWeight: '800',
                    marginLeft: 45,
                    marginTop: 10,
                  }}>
                  {ticket.ticketBus}
                </Text>
              </View>
              <View
                style={{
                  marginTop: 120,
                  marginLeft: 60,
                }}>
                <QRComponent />
              </View>
            </View>
          </ImageBackground>
        </DropShadow>
      </ViewShot>
      <Button
        onPress={takeSs}
        mode="contained"
        uppercase={false}
        style={ticketScreenStyle.sveBtn}>
        Save Ticket
      </Button>
    </View>
  );
};

export default TicketScreen;
