import React from 'react';
import {Image, Text, View} from 'react-native';
import DropShadow from 'react-native-drop-shadow';
import {Button, RadioButton} from 'react-native-paper';
import paymentScreenStyle from './styles/PaymentStyles';

const PaymentScreen = () => {
  const [checked, setChecked] = React.useState('credit');
  return (
    <View style={paymentScreenStyle.mainView}>
      <View style={paymentScreenStyle.imageView}>
        {
          // Change the image according to the selected payment type.
          checked === 'credit' ? (
            <Image
              source={{
                uri: 'https://i.postimg.cc/wMRTB8q4/99455-credit-card.gif',
              }}
              style={paymentScreenStyle.image}
            />
          ) : (
            <Image
              source={{
                uri: 'https://i.postimg.cc/MG5MQSy9/96570-payments-app-hero.gif',
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
          <View style={paymentScreenStyle.rowView}>
            <Button icon="credit-card" />

            <Text style={paymentScreenStyle.creditText}>Credit/Debit Card</Text>
            <RadioButton
              value="Card"
              status={checked === 'credit' ? 'checked' : 'unchecked'}
              onPress={() => setChecked('credit')}
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
          <View style={paymentScreenStyle.rowView}>
            <Button icon="account" />

            <Text style={paymentScreenStyle.creditText2}> Account</Text>
            <RadioButton
              value="Account"
              status={checked === 'Account' ? 'checked' : 'unchecked'}
              onPress={() => setChecked('Account')}
            />
          </View>
        </DropShadow>
      </View>
      <Button mode="contained" style={paymentScreenStyle.proceedBtn}>
        Proceed
      </Button>
    </View>
  );
};

export default PaymentScreen;
