import React, {useState} from 'react';
import {
  Button,
  View,
  Platform,
  PermissionsAndroid,
  ToastAndroid,
} from 'react-native';
import QRComponent from '../components/qrComponent/QRComponent';
import RNFS from 'react-native-fs';
import CameraRoll from '@react-native-community/cameraroll';
import {err} from 'react-native-svg/lib/typescript/xml';

const QRScreen = () => {
  const initialItemState = {
    ticketID: 'test1234',
    userName: 'test',
    From: 'Galle',
    to: 'Mathaara',
    amountPayed: '200',
  };

  const [item, setItem] = useState(initialItemState);
  const [productQRref, setProductQRref] = useState();

  const saveQrToDisk = async () => {
    if (Platform.OS === 'android') {
      await hasAndroidPermission();
    }

    if (productQRref) {
      productQRref.toDataURL(data => {
        let filePath = RNFS.CachesDirectoryPath + `/${item.ticketID}.png`;
        console.log(filePath);
        RNFS.writeFile(filePath, data, 'base64')
          .then(success => {
            console.log(success);
            return CameraRoll.save(filePath, 'photo');
          })
          .then(() => {
            ToastAndroid.show('QRCode saved to gallery', ToastAndroid.LONG);
          });
      });
    }
  };

  const hasAndroidPermission = async () => {
    try {
      const permission = PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE;
      await PermissionsAndroid.request(permission);
      Promise.resolve();
    } catch (error) {
      console.log(error);
      Promise.reject(error);
    }
  };

  return (
    <View>
      <View>
        <QRComponent
          value={JSON.stringify({
            TicketID: item.ticketID,
            FROM: item.From,
            TO: item.to,
            AMOUNT: item.amountPayed,
          })}
          getRef={c => setProductQRref(c)}
        />
      </View>
      <View>
        <Button onPress={saveQrToDisk} title="Save QR to gallery"></Button>
      </View>
    </View>
  );
};

export default QRScreen;