import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useEffect, useState} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {ActivityIndicator} from 'react-native-paper';
import QRComponent from '../components/qrComponent/QRComponent';
import getUserId from '../utils/getUserId';

const RideNowScreen = () => {
  const [userId, setUserId] = useState(null);
  // var userId = null;
  const initialItemState = {
    ticketID: 'test1234',
    userName: 'test',
    From: 'Galle',
    to: 'Mathaara',
    amountPayed: '200',
  };
  useEffect(() => {
    getUserId().then(res => {
      setUserId(res);
    });
  }, []);

  console.log('dssd', userId);

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
      {userId == null ? (
        <ActivityIndicator />
      ) : (
        <>
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
                  userId: userId,
                })}
                getRef={null}
              />
            </View>
          </View>
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({});

export default RideNowScreen;
