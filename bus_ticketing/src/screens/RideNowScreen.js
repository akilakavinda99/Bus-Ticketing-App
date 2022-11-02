import React, {useState} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import QRComponent from '../components/qrComponent/QRComponent';

const RideNowScreen = () => {
  const initialItemState = {
    ticketID: 'test1234',
    userName: 'test',
    From: 'Galle',
    to: 'Mathaara',
    amountPayed: '200',
  };

  const [item, setItem] = useState(initialItemState);
  return (
    <View
      style={{
        backgroundColor: 'white',
        marginTop: 90,
        marginLeft: 15,
        marginRight: 12,
        borderRadius: 10,
        elevation: 5,
      }}>
      <Text
        style={{
          marginTop: 50,
          textAlign: 'center',
          fontSize: 20,
          fontWeight: 'bold',
        }}>
        Scan this QR
      </Text>
      <Text
        style={{
          //   marginTop: 50,
          fontSize: 20,
          textAlign: 'center',
          fontWeight: 'bold',
        }}>
        When you get in and get out of the bus
      </Text>
      <View>
        <View
          style={{
            marginTop: 80,
            marginLeft: 85,
            marginBottom: 30,
          }}>
          <QRComponent
            size={200}
            value={JSON.stringify({
              TicketID: item.ticketID,
              FROM: item.From,
              TO: item.to,
              AMOUNT: item.amountPayed,
            })}
            getRef={null}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({});

export default RideNowScreen;
