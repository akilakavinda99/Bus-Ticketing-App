import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Image, Text, View} from 'react-native';
import DropShadow from 'react-native-drop-shadow';
import {Button, RadioButton} from 'react-native-paper';
import ticketTypeScreenStyle from './styles/TicketTypeStyles';

const TicketTypeScreen = () => {
  const [checked, setChecked] = React.useState('ticket');
  const navigation = useNavigation();

  const navigateToTicketType = () => {
    if (checked === 'ticket') {
      navigation.navigate('TicketScreen');
    } else {
      navigation.navigate('QR');
    }

    // navigation.navigate('QR');
  };

  return (
    <View style={ticketTypeScreenStyle.mainView}>
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
          <View style={ticketTypeScreenStyle.rowView}>
            <Button icon="credit-card" />

            <Text style={ticketTypeScreenStyle.creditText}>
              Credit/Debit Card
            </Text>
            <RadioButton
              value="ticket"
              status={checked === 'ticket' ? 'checked' : 'unchecked'}
              onPress={() => setChecked('ticket')}
            />
          </View>
        </DropShadow>
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
          <View style={ticketTypeScreenStyle.rowView}>
            <Button icon="account" />

            <Text style={ticketTypeScreenStyle.creditText2}> Account</Text>
            <RadioButton
              value="qr"
              status={checked === 'qr' ? 'checked' : 'unchecked'}
              onPress={() => setChecked('qr')}
            />
          </View>
        </DropShadow>
      </View>
      <Button
        mode="contained"
        style={ticketTypeScreenStyle.proceedBtn}
        onPress={navigateToTicketType}>
        Proceed
      </Button>
    </View>
  );
};

export default TicketTypeScreen;
