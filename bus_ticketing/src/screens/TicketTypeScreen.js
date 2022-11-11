/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useState} from 'react';
import {ActivityIndicator, Alert, Image, Text, View} from 'react-native';
// import DropShadow from 'react-native-drop-shadow';
import {Button, RadioButton} from 'react-native-paper';
import API from '../redux/api/apiConnection';
import getUserId from '../utils/getUserId';
import ticketTypeScreenStyle from './styles/TicketTypeStyles';

const TicketTypeScreen = ({navigation, route}) => {
  const api = new API();
  const {ticket, paymentMethod} = route.params;
  const [checked, setChecked] = React.useState('ticket');
  const [userId, setUserId] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getUserId().then(res => {
      setUserId(res);
    });
  }, []);
  const navigateToTicketType = async () => {
    setLoading(true);

    ticket.userID = userId; // This is a dummy user ID. This should be replaced with the user ID of the logged in user.
    ticket.paymentMethod = paymentMethod;

    const result = await api.post('ticket/new', ticket);
    // Check the response code and display alerts according to it.
    setLoading(false);

    if (result.data.resCode === 200) {
      if (checked === 'ticket') {
        navigation.navigate('TicketScreen', {ticket: ticket});
      } else {
        navigation.navigate('QR', {ticket: ticket});
      }
    } else if (result.data.resCode === 401) {
      console.log('Error creating ticket');
      Alert.alert('Error', 'Error creating ticket', [
        {text: 'OK', style: 'cancel'},
      ]);
    } else if (result.data.resCode === 402) {
      console.log('Insufficient account balance');
      Alert.alert(
        'Alert',
        'Insufficient account balance. Do you want to add money to your account?',
        [
          {text: 'Cancel', style: 'cancel'},
          {text: 'OK', onPress: () => navigation.navigate('ReloadAccount', {ticket: ticket, fromPayment: true})},
        ],
      );
    } else {
      console.log('Error creating ticket');
      Alert.alert(
        'Error',
        'Error creating ticket',
        [{text: 'OK', style: 'cancel'}],
        {cancelable: true},
      );
    }
  };

  return (
    <View style={ticketTypeScreenStyle.mainView}>
      {loading ? (
        <ActivityIndicator />
      ) : (
        <>
          <View style={ticketTypeScreenStyle.imageView}>
            {
              // Change the image according to the selected payment type.
              checked === 'ticket' ? (
                <Image
                  source={{
                    uri: 'https://i.postimg.cc/mgrVjGC8/107295-ticket-query-on-1.gif',
                  }}
                  style={ticketTypeScreenStyle.image}
                />
              ) : (
                <Image
                  source={{
                    uri: 'https://i.postimg.cc/Wz9GdXSX/70533-qr-code.gif',
                  }}
                  style={{
                    marginTop: 20,
                    width: 300,
                    height: 220,
                  }}
                />
              )
            }
          </View>
          <View>
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
            <View style={ticketTypeScreenStyle.rowView}>
              <Button icon="ticket" />
              <Text style={ticketTypeScreenStyle.creditText}>Get a ticket</Text>
              <RadioButton
                value="ticket"
                status={checked === 'ticket' ? 'checked' : 'unchecked'}
                onPress={() => setChecked('ticket')}
              />
            </View>
            {/* </DropShadow> */}
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
            <View style={ticketTypeScreenStyle.rowView}>
              <Button icon="qrcode" />
              <Text style={ticketTypeScreenStyle.creditText2}> Get a QR</Text>
              <RadioButton
                value="qr"
                status={checked === 'qr' ? 'checked' : 'unchecked'}
                onPress={() => setChecked('qr')}
              />
            </View>
            {/* </DropShadow> */}
          </View>
          <Button
            mode="contained"
            style={ticketTypeScreenStyle.proceedBtn}
            onPress={navigateToTicketType}>
            Proceed
          </Button>
        </>
      )}
    </View>
  );
};

export default TicketTypeScreen;
